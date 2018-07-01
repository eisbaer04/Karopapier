const _ = require('underscore');
const Backbone = require('backbone');
const moment = require('moment');

module.exports = Backbone.View.extend({
    id: 'gameInfo',
    template: require('../../../templates/game/gameInfo.html'),
    initialize: function() {
        _.bindAll(this, 'render');
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model.map, 'change', this.render);

        this.dirTitle = {
            'formula1': 'Formula 1',
            'classic': 'klassisch',
            'free': 'egal',
        };
        this.dirMeaning = {
            'formula1': 'erst alle über\'s die Ziel',
            'classic': 'erst weg vom Ziel',
            'free': 'fahrt wie ihr wollt',
        };

        this.tcMeaning = {
            'free': 'grad egal',
            'forbidden': 'nicht erlaubt',
            'allowed': 'erlaubt',
        };
    },
    render: function() {
        // console.log("Render infos for ", this.model.get("name"));
        if (!this.model.get('completed')) {
            // console.log("Skip rendering, game not complete");
            return false;
        }
        let data = this.model.toJSON();
        data.mapId = this.model.map.get('id');
        data.mapName = this.model.map.get('name');
        data.mapAuthor = this.model.map.get('author');
        data.dirMeaning = this.dirMeaning[data.dir];
        data.dirTitle = this.dirTitle[data.dir];
        data.createdDate = moment(this.model.get('created'), 'YYYY-MM-DD HH:mm').format('DD.MM.YYYY');
        data.createdTime = moment(this.model.get('created'), 'YYYY-MM-DD HH:mm').format('HH:mm');

        let cpStatus = 'aktiviert';
        if (this.model.map.get('cps').length == 0) {
            cpStatus = 'deaktiviert, die Karte hat keine';
        } else {
            if (!this.model.get('withCheckpoints')) {
                cpStatus = 'deaktiviert';
            }
        }
        data.cpStatus = cpStatus;
        // console.warn(this.model.get("tcrash"));
        data.tcMeaning = this.tcMeaning[this.model.get('tcrash')];

        this.$el.html(this.template(data));
        /* {
         mapId: this.model.map.get("id"),
         gameCreator: this.model.get("creator"),
         gameCreated: this.model.get("created"),
         gameDir: this.model.get("dir"),
         gameCps: this.model.get("cps"),
         gameTc: this.model.get("tcrash"),
         gameZzz: this.model.get("zzz")
         }));
         */
    },
});

