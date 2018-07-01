const Backbone = require('backbone');
const Player = require('../model/Player');
const Position = require('../model/Position');

module.exports = Backbone.Collection.extend({
    model: Player,

    initialize: function(models, options) {

    },

    toJSON: function() {
        let modelJSON = [];
        this.each(function(e, i) {
            modelJSON.push(e.toJSON());
        });
        return modelJSON;
    },

    /**
     * positions, where all players currently stand.
     * can be limited to those that already moved this round (according to change of rules for GID>75000)
     */
    getOccupiedPositions: function(onlyMoved) {
        let queryParams = {
            position: 0,
            status: 'ok',
        };
        if (onlyMoved) {
            queryParams.moved = true;
        }
        let blockers = this.where(queryParams);

        let positions = [];
        for (let i = 0, l = blockers.length; i < l; i++) {
            let mos = blockers[i].moves;
            if (mos.length > 0) {
                let mo = mos.at(mos.length - 1);
                positions.push(new Position({
                    x: mo.attributes.x,
                    y: mo.attributes.y,
                }));
            }
        }
        return positions;
    },
});
