const Marionette = require('backbone.marionette');
const UserView = require('../UserView');

module.exports = Marionette.CollectionView.extend({
    tagName: 'ul',
    className: 'chatUsersView',
    childView: UserView,
    childViewOptions: {
        tagName: 'li',
        withGames: true,
        withAnniversary: true,
        withDesperation: true,
        withGamesLink: true,
        withInfoLink: true,
    },
});
