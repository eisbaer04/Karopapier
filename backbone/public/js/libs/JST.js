this["JST"] = this["JST"] || {};

this["JST"]["chat/chatControl"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        if (settings.history) {
            ;__p += '\nTimewarp-Modus aktiv <img src="/images/timewarp.png" class="toggleTimewarp spinning"><br/>\n<input name="startPicker" id="startPicker" type="range" min="1" max="' + ((__t = ((settings.lastLineId - settings.limit))) == null ? '' : __t) + '"\n       value="' + ((__t = (settings.start)) == null ? '' : __t) + '" style="width: 400px"><br/>\nZeile <input type="text" name="startLine" id="startLine" value="' + ((__t = (settings.start)) == null ? '' : __t) + '" style="width: 50px">\n<span class="rewind clickable">-100</span> <span class="forward clickable">+100</span><br>\n<button id="startLineUpdate">Hinspringen</button>\n';
        } else {
            ;__p += '\nFunkse:\n';
            var limits = [10, 20, 30, 50, 75, 100];
            __p += '\n';
            for (var i = 0; i < 6; i++) {
                ;__p += '\n<span class="messageLimit">\n    ';
                if (settings.limit == limits[i]) {
                    ;__p += '<b>';
                }
                ;__p += '\n    ' + ((__t = (limits[i])) == null ? '' : __t) + '\n    ';
                if (settings.limit == limits[i]) {
                    ;__p += '</b>';
                }
                ;__p += '\n    </span>\n';
            }
            ;__p += '\n<img src="/images/timewarp.png" class="toggleTimewarp"> <img src="/images/settings.png"\n                                                             onclick="$(\'.chatOptions\').toggle()"/>\n<div class="chatOptions" style="display: none">\n    Lustiger Chat <span class="slidercheckbox"><input name="funnyChat" type="checkbox" id="funnyChat" ';
            if (settings.funny) {
                ;__p += 'checked="checked"';
            }
            ;__p += '><label\n        title="Wenn Du es anders haben willst gibt\'s hier nen Knopf" for="funnyChat"\n        class="slidercheckbox_smile"></label></span><br/>\n    Botrix Spielanfragen anzeigen? <span class="slidercheckbox"><input name="showBotrix" type="checkbox" id="showBotrix" ';
            if (settings.showBotrix) {
                ;__p += 'checked="checked"';
            }
            ;__p += '><label\n        title="Wenn Du es anders haben willst gibt\'s hier nen Knopf" for="showBotrix"\n        class="slidercheckbox_bulb"></label></span><br/>\n    Game-Links zur alten Ansicht? <span class="slidercheckbox"><input name="oldLink" type="checkbox" id="oldLink" ';
            if (settings.oldLink) {
                ;__p += 'checked="checked"';
            }
            ;__p += '><label\n        title="Wenn Du es anders haben willst gibt\'s hier nen Knopf" for="oldLink" class="slidercheckbox_onoff"></label></span><br/>\n\n    <div id="notificationControlView">NotificationControl goes here</div>\n</div>\n\n';
        }
        ;__p += '\n<!--<input type="checkbox" id="showBotrixGames"> <label for="showBotrixGames"> Botrix Spielanfragen anzeigen</label> -->\n';
    }
    return __p
};

this["JST"]["chat/chatEnter"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<form id="chatEnterForm">\n    <span id="chatUserName"><b>' + ((__t = (user.login)) == null ? '' : __t) + '</b></span> sagt: </span>\n    <input type="text" name="newchatmessage" id="newchatmessage" style="width: 300px" />\n    <input type="submit" value="Sag es" id="newchatmessagesubmit" />\n</form>\n<br>\n<a href="http://smile.welcomes-you.com/">Smiley-Sammlung</a>\n';
    }
    return __p
};

this["JST"]["chat/chatInfo"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<span class="small chatInfo">Wer in den letzten 60 Sekunden da war, sortiert nach Althasigkeit</span><br/>\n<ul id="chatUsers" class="chatUsersView"></ul>\n<span class="quicktip quicktip-help quicktip-fixed" data-quicktip="Hastig akkumulierte Blockersumme derer im Chat"\n      title="Hastig akkumulierte Blockersumme derer im Chat">HABDICH:  </span>\n<span id="chatHabdich">-</span>\n<br/>\n<div id="chatInfoGames">\n    <div id="chatInfoDran"><a target="ibndran" href="/dran">-</a></div>\n    <span id="chatInfoBlockerRank">-</span><br>\n    <span id="chatInfoTopBlocker">-</span><br>\n</div>\n<div id="chatBlockerInfo">\n    <!-- <div class="clearer"></div> -->\n    <button style="background-color: black; color: white" onclick="$(\'html\').css({transform:\'rotate(1440deg)\',transition: \'240s\'})">DO NOT\n        PRESS!!\n    </button>\n</div>\n';
    }
    return __p
};

this["JST"]["chat/chatLayout"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h1 class="karoborder">Bordfunk für alle!</h1>\n<div id="chatWrapper">\n    <div id="chatMessages"></div>\n    <div id="chatInfo"></div>\n</div>\n<div class="clearer"></div>\n<div id="chatControl"></div>\n<div id="chatEnter"></div>\n';
    }
    return __p
};

this["JST"]["chat/chatMessage"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        if (user.trim() != "") {
            ;__p += '\n<b>' + ((__t = (user)) == null ? '' : __t) + '</b> <span title="Zeile ' + ((__t = (lineId)) == null ? '' : __t) + ' im Chat">(' + ((__t = (time)) == null ? '' : __t) + ')</span>:\n';
        }
        ;__p += '\n<span class="chatText">' + ((__t = (text)) == null ? '' : __t) + '</span>\n';
    }
    return __p
};

this["JST"]["dran/dranGames"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<table>\n    <thead>\n        <tr>\n            <th>Karte</th>\n            <th>Name</th>\n            <th>Seit</th>\n        </tr>\n    </thead>\n    <tbody>\n\n    </tbody>\n</table>\n';
    }
    return __p
};

this["JST"]["dran/dranLayout"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h1 class="karoborder">KaroBART</h1>\n<div id="dranWrapper">\n    <div id="dranInfo">\n        <p>\n            Dieser KaroBART (Bindran-Alarm in Real-Time) zeigt Dir sofort, wo Du dran bist.<br />\n            Nur wenige Millisekunden nachdem ein Mitspieler seinen Zug gemacht hat und Du somit dran bist,\n            siehst Du es hier!</p>\n\n        <p>Echtem Karo-Live-Stress steht jetzt nichts mehr im Weg!!!</p>\n    </div>\n    <div id="dranGames"></div>\n</div>\n<div class="clearer"></div>\n';
    }
    return __p
};

this["JST"]["dumbview"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += 'Hello, I am a <strong>' + ((__t = (adjective)) == null ? '' : __t) + '</strong> view template. Please JST me via grunt an watch my changes, so I can regrunt!\n';
    }
    return __p
};

this["JST"]["editor/imagetranslatorinfo"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        if (active) {
            ;__p += '\r\nQuelle: ' + ((__t = (sourceWidth)) == null ? '' : __t) + ' x ' + ((__t = (sourceHeight)) == null ? '' : __t) + '<br/>\r\nSkalierung: ' + ((__t = (scaleWidth)) == null ? '' : __t) + ' x ' + ((__t = (scaleHeight)) == null ? '' : __t) + '<br/>\r\nZiel: ' + ((__t = (targetCols)) == null ? '' : __t) + ' x ' + ((__t = (targetRows)) == null ? '' : __t) + '<br/>\r\n';
            if (fieldtime) {
                ;__p += '\r\nZeit: ' + ((__t = ((targetRows * targetCols))) == null ? '' : __t) + ' x ' + ((__t = (fieldtime)) == null ? '' : __t) + 'ms = ' + ((__t = (Math.round(targetRows * targetCols * fieldtime / 1000))) == null ? '' : __t) + ' sec\r\n';
            }
            ;__p += '\r\n';
        }
        ;__p += '\r\n';
    }
    return __p
};

this["JST"]["editor/imagetranslatorlayout"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<div class="editor-imagetranslator-info">Info</div>\r\n<div class="editor-imagetranslator-settings">Inputs</div>\r\n<div class="editor-imagetranslator-preview">Bild</div>\r\n';
    }
    return __p
};

this["JST"]["editor/imagetranslatorsettings"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        if (active) {
            ;__p += '\r\n    Skalierung:<!--<br/>\r\n    Breite: --><input value="' + ((__t = (scaleWidth)) == null ? '' : __t) + '" type="number" name="scaleWidth"\r\n                      class="editor-imagetranslator-settings-scaleWidth"><br/>\r\n    <!--Höhe: <input value="' + ((__t = (scaleHeight)) == null ? '' : __t) + '" type="number" name="scaleHeight" class="editor-imagetranslator-settings-scaleHeight"><br/> -->\r\n    <label>Invertiert: <input type="checkbox" name="invert" class="editor-imagetranslator-settings-invert"><br/>\r\n    ';
            if (binary) {
                ;__p += '\r\n        <label>Zweifarbig: <input type="checkbox" name="binary" class="editor-imagetranslator-settings-binary"> Zweifarbenmodus mit ' + ((__t = (buttons[1])) == null ? '' : __t) + ' und ' + ((__t = (buttons[3])) == null ? '' : __t) + ' (Linke und Rechte Mausfarbe)</label><br/>\r\n    ';
            } else {
                ;__p += '\r\n        <label>Zweifarbig: <input type="checkbox" name="binary" class="editor-imagetranslator-settings-binary"> Vollfarbenmodus, voll bunt! (Berechnung kann laenger dauern...)</label><br/>\r\n    ';
            }
            ;__p += '\r\n    <label>Speedmode: <input type="checkbox" name="speedmode" class="editor-imagetranslator-settings-speedmode"> Geht viel schneller, Browser kann aber nicht reagieren. Haken weg macht alternativ entspanntes Zuschauen... </label><br />\r\n    <button>RECHNE!!!!</button>\r\n';
        } else {
            ;__p += '\r\n    Zieh hier mal ein Bild hin.\r\n';
        }
        ;__p += '\r\n';
    }
    return __p
};

this["JST"]["editor/layout"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h1>KaroKaMEL - Karo Karten Mal- & Editier-Lösung</h1>\n\n<div class="editor-map-container">\n    <div class="editor-mapview-container"></div>\n    <div class="editor-codeview-container"></div>\n    <div class="editor-imagetranslator-container"></div>\n</div>\n<div class="editor-tools-container"></div>\n<div class="clearer"></div>\n<p>\n    <b>DAS IST NOCH LANGE NICHT FERTIG!</b><br/>\n    Bitte bitte bitte - mit Vorschlägen noch zurückhalten. Wenn ihr welche habt, dann notiert sie Euch.<br/>\n    Der Dezember ist noch ein paar Tage, der Adventskarolender auch - und bis zum 24. tut sich hier bestimmt noch\n    was.<br/>\n    Wenn dann am 25. euer sehnlichster Wunsch IMMER NOCH NICHT erfüllt ist - dann bitte mail(d)en<br/>\n    <br/>\n    Karolender Türchen 7:\n    <i>KaroKaMEL - wirst ihn lieben?</i> Jetzt neu! MALEN mit Zahlen!<br/>\n    Karolender Türchen 8:\n    <i>Hat den Code-Aufräumer \'bracht.</i> Beim Verlassen des Textfeldes wird der Kartencode korrigiert oder vervollständigt<br/>\n    Karolender Türchen 9:\n    <i>Über Tasten drücken freu\'n.</i> Das Hauptmalfeld (linke Maustaste) lässt sich jetzt auch mit der Tastatur wählen. Einfach entsprechende Taste drücken<br/>\n    Karolender Türchen 10:\n    <i>Karten laden tut jetzt geh\'n.</i> Rechts dieses Dropdown, da sollten Karten zur Auswahl stehen<br/>\n    Karolender Türchen 11:\n    <i>Knopf mit Undo kommt zur Helf\'.</i> Undo!! Rückgängig!! Strg+z!! Für vermalte...<br/>\n    Karolender Türchen 14:\n    <i>Kannst die Karte jetzt nach hier ziehen.</i> Karte am grauen Rand größer ziehen. Ganz neue Möglichkeiten!!!<br/>\n    Karolender Türchen 17:\n    <i>Kannst ein Bildlein jetzt hier rin zieh\'n.</i> Scleppen und Abwerfen von Bildern auf die Katze macht den Verwandler an<br/>\n    Karolender Tür Zwei Eins:\n    <i>Flutfüllfarben sind jetzt Deins.</i> "Floodfill", das Ausfüllen von Flächen kann der Editor jetzt auch<br/>\n    Karolender Twenty-Two:\n    <i>Jetzt mit besserem Undo.</i> "Floodfill", "Katzenbild" und auch einfaches Malen ist jetzt in sinnvollen Undo-Schritten unterteilt<br/>\n\n</p>\n\n';
    }
    return __p
};

this["JST"]["editor/mapload"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h3 class="dense">Karten</h3>\n<select class="karoMaps"></select>\n';
    }
    return __p
};

this["JST"]["editor/tools"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h3 class="dense">Farbkasten</h3>\nFeld zum Malen auswählen:\n<div class="editor-tools-fields"></div>\n<div class="editor-tools-toolbox"></div>\n<p>Mit Klick der linken, mittlereren oder rechten Maustaste auf das Feld oben auswählen, womit die Taste malen soll</p>\n<p>Alternativ einfach mal eine Taste wie X oder O oder 1-9 drücken...</p>\n<div class="editor-tools-mousebuttons"></div>\n<div class="editor-tools-viewsettings"></div>\n<div class="editor-tools-mapload"></div>\n';
    }
    return __p
};

this["JST"]["editor/viewsettings"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h3 class="dense">Darstellung</h3>\n<table>\n    <tr>\n        <td>Karogröße:</td>\n        <td>\n            <input class="editor-tools-settings-size" type="number" value="12" name="size" maxlength="2" length="2" style="width: 50px">\n        </td>\n        <td><label>Punkte malen? <input class="editor-tools-settings-specles" type="checkbox" name="specles"></label></td>\n    </tr>\n    <tr>\n        <td>Karorand:</td>\n        <td colspan="2">\n            <input class="editor-tools-settings-border" type="number" value="1" name="border" maxlength="2" style="width: 50px">\n        </td>\n    </tr>\n</table>\n';
    }
    return __p
};

this["JST"]["game/gameInfo"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<b>Spielinfos:</b>\n<ul>\n    <li>Game ID: ' + ((__t = (id)) == null ? '' : __t) + ' <a href="//www.karopapier.de/showmap.php?GID=' + ((__t = (id)) == null ? '' : __t) + '">\n        <small>(Karo1 Link)</small>\n    </a></li>\n    <li>Karte: ' + ((__t = (mapId)) == null ? '' : __t) + ' - &quot;' + ((__t = (mapName)) == null ? '' : __t) + '&quot; von ' + ((__t = (mapAuthor)) == null ? '' : __t) + '</li>\n    <li>Richtungsmodus <b>' + ((__t = (dirTitle)) == null ? '' : __t) + '</b>, ' + ((__t = (dirMeaning)) == null ? '' : __t) + '</li>\n    <li>ZZZ steht auf ' + ((__t = (zzz)) == null ? '' : __t) + '</li>\n    <li>Checkpoints sind <b>' + ((__t = (cpStatus)) == null ? '' : __t) + '</b></li>\n    <li>Taktisches Crashen ist <b>' + ((__t = (tcMeaning)) == null ? '' : __t) + '</b></li>\n</ul>\nÜbrigens wurde das Spiel am ' + ((__t = (createdDate)) == null ? '' : __t) + ' um ' + ((__t = (createdTime)) == null ? '' : __t) + ' von ' + ((__t = (creator)) == null ? '' : __t) + ' gestartet.\n';
    }
    return __p
};

this["JST"]["game/gameListItem"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        __p += '<td><a href="/game.html?GID=' + ((__t = (id)) == null ? '' : __t) + '"><img src="//www.karopapier.de/pre/' + ((__t = (id)) == null ? '' : __t) + '.png" class="thumb50"></a></td>\n<td><a href="/game.html?GID=' + ((__t = (id)) == null ? '' : __t) + '" title="' + __e(name) + '">\n    ';
        if (name.length > 50) {
            ;__p += '\n    ' + __e(name.substring(0, 47)) + '...\n    ';
        } else {
            ;__p += '\n    ' + __e(name) + '\n    ';
        }
        ;__p += '\n</a></td>\n<td>\n    ';
        if (typeof blocked !== "undefined") {
            ;__p += '\n    ' + ((__t = (blocked)) == null ? '' : __t) + '\n    ';
        } else {
            ;__p += '\n    ';
            d = new Date();
            __p += '\n    ' + ((__t = (d.getHours())) == null ? '' : __t) + ':' + ((__t = (((d.getMinutes() < 10) ? "0" : "") + d.getMinutes())) == null ? '' : __t) + '\n    ';
        }
        ;__p += '\n</td>\n';
    }
    return __p
};

this["JST"]["game/gameTitle"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h1 id="gameTitle">' + __e(name) + '</h1>\n';
    }
    return __p
};

this["JST"]["game/playerTable"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<table class=\'playerList thin\'>\n    <thead>\n        <tr>\n            <th>Spieler <input type="checkbox" class="checkAll" checked="checked"></th>\n            <th>Farben</th>\n            <th>Züge</th>\n            <th>Runde</th>\n            <th>Checkpoints</th>\n            <th>letzter Zug</th>\n            <th>Bedenkzeit</th>\n        </tr>\n    </thead>\n    <tbody></tbody>\n</table>\n';
    }
    return __p
};

this["JST"]["game/playerTableRow"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        __p += '<td style="background-color: #' + ((__t = (color)) == null ? '' : __t) + '; border-radius: 4px; box-shadow: 1px 2px rgba(0,0,0,.4); vertical-align: middle; text-align: center">\n    &nbsp;<input type="checkbox" checked="checked"> &nbsp;\n</td>\';\n<td>' + ((__t = (name)) == null ? '' : __t) + '</td>\n<td><img src="images/car.png"/>' + ((__t = (moves.length)) == null ? '' : __t) + '\n    ';
        if (crashCount > 0) {
            ;__p += '\n    <img src="images/crash.png"/> ' + ((__t = (crashCount)) == null ? '' : __t) + '\n    ';
        }
        ;__p += '\n</td>\n\n\n<td><span class="' + ((__t = (statusClass)) == null ? '' : __t) + '">' + ((__t = (displayStatus)) == null ? '' : __t) + '</span></td>\n<td>\n    ';
        for (var i in checkedCps) {
            ;__p += '\n    <img class="icon-' + ((__t = (checkedCps[i])) == null ? '' : __t) + '" style="border: 0px"/>\n    ';
        }
        ;__p += '\n</td>";\n<td>' + ((__t = (lastmovetime)) == null ? '' : __t) + '</td>\n<td>';
        var d = Math.floor(blocktime / 86400);
        var b = blocktime - d * 86400;
        var h = Math.floor(b / 3600);
        b = b - (h * 3600);
        var m = Math.floor(b / 60);
        b = b - (m * 60);
        ;__p += '\n    ' + ((__t = (d)) == null ? '' : __t) + ' Tage, ' + ((__t = (h)) == null ? '' : __t) + ':' + ((__t = (m)) == null ? '' : __t) + ':' + ((__t = (b)) == null ? '' : __t) + '\n</td>\n';
    }
    return __p
};

this["JST"]["main/navi"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<ul>\n    <li><a href="index.html">Home</a></li>\n    <li><a href="chat.html">Chat</a></li>\n    <li><a href="dran.html">Dran</a></li>\n    <li><a href="game.html">Game</a></li>\n    <li><a href="editor.html">Editor</a></li>\n</ul>';
    }
    return __p
};

this["JST"]["main/userInfoBar"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<a href="/logout">Logout</a>\n';
    }
    return __p
};

this["JST"]["map/listView"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<select>\n</select>\n';
    }
    return __p
};

this["JST"]["map/svg"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<svg height="10" width="10" id="mapSvgView" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <defs>\n        <pattern y="0" x="0" height="24" width="24" patternUnits="userSpaceOnUse" id="grassPattern">\n            <rect class="grasscolor" height="24" width="24" y="0" x="0"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="1" y="5"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="1" y="5"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="3" y="5"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="6" y="7"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="6" y="17"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="8" y="21"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="9" y="2"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="12" y="4"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="13" y="15"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="14" y="4"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="14" y="19"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="17" y="7"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="17" y="12"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="18" y="23"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="21" y="16"></rect>\n            <rect class="grassspeclecolor" height="1" width="1" x="23" y="12"></rect>\n        </pattern>\n        <pattern y="0" x="0" height="24" width="24" patternUnits="userSpaceOnUse" id="roadPattern">\n            <rect class="roadcolor" height="24" width="24" y="0" x="0"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="1" y="5"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="1" y="5"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="3" y="5"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="6" y="7"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="6" y="17"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="8" y="21"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="9" y="2"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="12" y="4"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="13" y="15"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="14" y="4"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="14" y="19"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="17" y="7"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="17" y="12"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="18" y="23"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="21" y="16"></rect>\n            <rect class="roadspeclecolor" height="1" width="1" x="23" y="12"></rect>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="grid">\n            <line stroke-width="1" stroke="black" y2="12" x2="12" y1="0" x1="12"></line>\n            <line stroke-width="1" stroke="black" y2="12" x2="12" y1="12" x1="0"></line>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="finishPattern">\n            <rect fill="black" height="12" width="12" y="0" x="0"></rect>\n            <path fill="white" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="white" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="startPattern">\n            <rect fill="rgb(100,100,100)" height="12" width="12" y="0" x="0"></rect>\n            <rect stroke-width="1" stroke="rgb(200,200,200)" fill="none" height="5" width="5" y="3.5" x="3.5"></rect>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp1pattern">\n            <rect class="cp1color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="black" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="black" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp2pattern">\n            <rect class="cp2color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="white" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="white" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp3pattern">\n            <rect class="cp3color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="black" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="black" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp4pattern">\n            <rect class="cp4color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="white" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="white" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp5pattern">\n            <rect class="cp5color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="black" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="black" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp6pattern">\n            <rect class="cp6color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="white" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="white" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp7pattern">\n            <rect class="cp7color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="black" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="black" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp8pattern">\n            <rect class="cp8color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="white" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="white" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n        <pattern y="0" x="0" height="12" width="12" patternUnits="userSpaceOnUse" id="cp9pattern">\n            <rect class="cp9color" height="12" width="12" y="0" x="0"></rect>\n            <path fill="black" d="M0,0L3,0L3,3L0,3L0,0M6,0L9,0L9,3L6,3L6,0M3,3L6,3L6,6L3,6L3,3M9,3L12,3L12,6L9,6L9,3"></path>\n            <path fill="black" d="M0,6L3,6L3,9L0,9L0,6M6,6L9,6L9,9L6,9L6,6M3,9L6,9L6,12L3,12L3,9M9,9L12,9L12,12L9,12L9,9"></path>\n        </pattern>\n    </defs>\n    <rect height="100%" width="100%" y="0" x="0" class="grass" id="mainfill"></rect>\n    <g id="paths">\n    </g>\n    <rect opacity=".3" fill="url(#grid)" height="100%" width="100%" y="0" x="0"></rect>\n</svg>';
    }
    return __p
};

this["JST"]["static/about"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape;
    with (obj) {
        __p += '<h1>Was ist das?</h1>\n';
    }
    return __p
};

this["JST"]["user/userView"] = function(obj) {
    obj || (obj = {});
    var __t, __p = '', __e = _.escape, __j = Array.prototype.join;

    function print() {
        __p += __j.call(arguments, '')
    }

    with (obj) {
        if (options.withAnniversary && data.birthdayToday) {
            ;__p += '\n<img src="//www.karopapier.de/images/smilies/birthday.gif" alt="Wird immer älter" title="Wird immer älter">\n';
        }
        ;__p += '\n';
        if (options.withAnniversary && data.karodayToday) {
            ;__p += '\n<img src="//www.karopapier.de/images/smilies/bouncy.gif" alt="Hat heute Karotag" title="Hat heute Karotag">\n';
        }
        ;__p += '\n';
        if (options.withDesperation && data.desperate) {
            ;__p += '\n<img src="//www.karopapier.de/images/spielegeil.png" alt="Spielegeil" title="Spielegeil">\n';
        }
        ;__p += '\n\n<span class="userLabel">\n';
        if (options.withInfoLink) {
            ;__p += '\n<a href="//www.karopapier.de/userinfo.php?about=' + ((__t = (data.id)) == null ? '' : __t) + '">\n    ';
        }
        ;__p += '\n    ' + ((__t = (data.login)) == null ? '' : __t) + '\n    ';
        if (options.withInfoLink) {
            ;__p += '\n</a>\n';
        }
        ;__p += '\n</span>\n\n';
        if (options.withGames) {
            ;__p += ' <small>';
            if (options.withGamesLink && data.self) {
                ;__p += '(<a href="/dran.html">' + ((__t = (data.dran)) == null ? '' : __t) + '</a>/';
            } else {
                ;__p += '(' + ((__t = (data.dran)) == null ? '' : __t) + '/';
            }
            ;
            if (options.withGamesLink) {
                ;__p += '<a href="http://www.karopapier.de/showgames.php?spielevon=' + ((__t = (data.id)) == null ? '' : __t) + '">' + ((__t = (data.activeGames)) == null ? '' : __t) + '</a>)';
            } else {
                ;__p += ((__t = (data.activeGames)) == null ? '' : __t) + ')';
            }
            ;__p += '</small>';
        }
        ;__p += '\n';
    }
    return __p
};