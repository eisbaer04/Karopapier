const _ = require('underscore');
const $ = require('jquery');
const Marionette = require('backbone.marionette');
const ChatUserCollection = require('../../collection/ChatUserCollection');
const ChatUsersView = require('./ChatUsersView');

module.exports = Marionette.ItemView.extend({
    tagName: 'div',
    className: 'chatInfoView',
    template: require('../../../templates/chat/chatInfo.html'),

    initialize(options) {
        options = options || {};
        if (!options.app) {
            console.error('No app in ChatInfoView');
            return false;
        }
        this.app = options.app;
        this.$el.html(this.template);
        // console.log("Init civ");

        this.chatUserCollection = new ChatUserCollection();
        this.chatUsersView = new ChatUsersView({
            collection: this.chatUserCollection,
            el: this.$('#chatUsers'),
        }).render();
        this.listenTo(this.chatUserCollection, 'add remove reset change', this.updateHabdich);
        this.listenTo(this.model, 'change:id', this.updateInfos);
        this.listenTo(this.model, 'change:dran', this.updateInfos);

        this.dranInterval = setInterval(() => {
            this.updateDranInfo();
        }, 60000);
        this.blockerInterval = setInterval(() => {
            this.updateTopBlocker();
        }, 60000);
        this.userInterval = setInterval(() => {
            this.updateChatUser();
        }, 60000);
        setTimeout(() => {
            this.updateChatUser();
        }, 1000);

        this.updateInfos();
    },

    onClose() {
        clearInterval(this.blockerInterval);
    },

    updateChatUser() {
        this.chatUserCollection.fetch();
    },

    updateInfos() {
        console.log('Update Chat Infos');
        this.updateDranInfo();
        this.updateHabdich();
        this.updateTopBlocker();
    },

    updateDranInfo() {
        const myId = this.model.get('id');
        if (myId == 0) return;
        let html;
        $.getJSON('/api/blockers', (bl) => {
            const blockerlist = bl;
            let dran = this.model.get('dran');
            if (dran == 0) {
                html = 'Du bist ein <a href="/karowiki/index.php/Nixblocker">Nixblocker</a>';
            }
            if (dran == 1) {
                html = 'Bei einem Spiel dran';
            }
            if (dran > 1) {
                html = '<a href="/dran.html" target="ibndran">Bei <strong>' + dran + '</strong> Spielen dran</a> <a href=""">'; // eslint-disable-line max-len
            }
            if (dran > 0) {
                let nextGame = this.app.UserDranGames.at(0);
                if (nextGame) {
                    html += '<br><a title="ZIEH!" href="/game.html?GID=' + nextGame.get('id') + '"><b>Zieh!</b><img src="/images/arrow_right.png" style="vertical-align: center"></a>'; // eslint-disable-line max-len
                }
            }
            $('#chatInfoDran').html(html);

            let pos = 0;
            if (blockerlist.length > 0) {
                let l = blockerlist.length;
                for (let i = 0; i < l; i++) {
                    if (blockerlist[i].id == myId) {
                        pos = i + 1;
                        i = l + 100;
                    }
                }
            }

            html = '';
            if (pos > 0) {
                if (pos == 1) {
                    html += 'DU BIST DER <b>VOLLBLOCKER</b>';
                } else if (pos == 2) {
                    html += 'DU BIST DER <b>VIZE-VOLLBLOCKER</b>';
                } else {
                    html += 'Platz ' + pos + ' der <a href="/blocker">Blockerliste</a>';
                }
            }

            // Check blocker list rank
            $('#chatInfoBlockerRank').html(html);
        });
    },

    updateHabdich() {
        let habdich = _.reduce(this.chatUserCollection.pluck('dran'), (sum, el) => {
            return sum + el;
        }, 0);
        this.$('#chatHabdich').text(habdich);
    },

    updateTopBlocker() {
        if (this.model.get('id') == 0) return;
        let html;
        $.getJSON('/api/user/' + this.model.get('id') + '/blocker.json', (data) => {
            if (data.length > 0) {
                let blocker = data[0];
                html = 'Dein Top-Blocker: ' + blocker.login + ' (' + blocker.blocked + ')';
            } else {
                html = '';
            }
            $('#chatInfoTopBlocker').html(html);
        });
    },
});
