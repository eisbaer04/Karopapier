const Marionette = require('backbone.marionette');
module.exports = Marionette.View.extend({
    template: require('../../templates/game/gameLayout.html'),
    regions: {
        title: '.game-title',
        mapcanvas: '.mapview'
    }
});