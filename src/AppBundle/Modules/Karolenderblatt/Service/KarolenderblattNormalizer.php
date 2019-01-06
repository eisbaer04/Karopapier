<?php
/**
 * Created by PhpStorm.
 * User: monti
 * Date: 06.01.2019
 * Time: 00:20
 */

namespace AppBundle\Modules\Karolenderblatt\Service;


use AppBundle\Modules\Karolenderblatt\ValueObject\KarolenderBlatt;
use AppBundle\Modules\Karolenderblatt\ValueObject\RawKarolenderblatt;

class KarolenderblattNormalizer
{

    public function normalize(RawKarolenderblatt $blatt)
    {
        $line = $blatt->getLine();

        var_dump($line);

        $daymod = -1;
        if (preg_match('/heute vor/i', $line)) {
            $daymod = 0;
        }

        if (preg_match('/gestern vor/i', $line)) {
            $daymod = 1;
        }

        if (preg_match('/vorgestern vor/i', $line)) {
            $daymod = 2;
        }

        if ($daymod < 0) {
            var_dump($blatt);
            die('weiss nicht wann - Tage');
        }

        $line = str_replace('vor zwei Jahren', 'vor 2 Jahren', $line);
        $line = str_replace('vor drei Jahren', 'vor 3 Jahren', $line);
        $line = str_replace('vor vier Jahren', 'vor 4 Jahren', $line);
        $line = str_replace('vor fuenf Jahren', 'vor 5 Jahren', $line);
        $line = str_replace('vor sechs Jahren', 'vor 6 Jahren', $line);
        $line = str_replace('vor sieben Jahren', 'vor 7 Jahren', $line);
        $line = str_replace('vor acht Jahren', 'vor 8 Jahren', $line);
        $line = str_replace('vor neun Jahren', 'vor 9 Jahren', $line);

        $pattern = '/vor (\d+) Jahren/';
        if (preg_match($pattern, $line, $matches)) {
            $years = $matches[1];

            $normLine = preg_replace($pattern, 'vor {DIFF} Jahren', $line);
            $normLine = preg_replace(
                '/kili \((.*)\): Karolenderblatt: (heute|gestern|vorgestern) vor/i',
                'Heute vor',
                $normLine
            );
            $normLine = preg_replace(
                '/kili \((.*)\): Karolenderblatt \(nachge(reicht|liefert)\): (heute|gestern|vorgestern) vor/i',
                'Heute vor',
                $normLine
            );
        } else {
            var_dump($blatt);
            die ('Weiss nicht wann - Jahre');
        }

        $posted = $blatt->getPosted();
        $d = \DateTime::createFromFormat("Y-m-d", $posted);
        $d->sub(new \DateInterval("P".$daymod."D"));
        $d->sub(new \DateInterval("P".$years."Y"));

        $k = KarolenderBlatt::create($posted, $d->format('Y-m-d'), $normLine);
        var_dump($k);

        return $k;
    }
}