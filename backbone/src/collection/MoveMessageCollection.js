const _ = require('underscore');
const Backbone = require('backbone');
const Move = require('../model/Move');

module.exports = Backbone.Collection.extend(/** @lends MoveMessageCollection.prototype */{
    /**
     * @constructor MoveMessageCollection
     * @class MoveMessageCollection
     */
    model: Move,
    initialize: function() {
        _.bindAll(this, 'updateFromPlayers');
    },

    comparator: function(mm) {
        return mm.get('t');
    },

    updateFromPlayers: function(players) {
        let msgs = [];
        players.each(function(p) {
            let withMessage = p.moves.filter(function(m) {
                return m.get('msg');
            });
            _.each(withMessage, function(m) {
                m.set('player', p);
            });
            msgs = msgs.concat(withMessage);
        });
        this.reset(msgs);
    },
});