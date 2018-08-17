<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class BackboneController extends Controller

{
    /**
     * @Route("/chat.html", name="backbone_chat")
     * @Route("/dran.html", name="backbone_dran")
     * @Route("/editor.html", name="backbone_editor")
     * @Route("/newgame.html", name="backbone_newgame")
     * @Route("/index.html", name="backbone_index")
     * @Security("has_role('ROLE_USER')")
     */
    public function htmlAction()
    {
        return new BinaryFileResponse(__DIR__.'/../../../web/index.html');
    }

    /**
     * @Route("/game.html", name="backbone_game")
     */
    public function gameAction()
    {
        return new BinaryFileResponse(__DIR__.'/../../../web/game.html');
    }
}
