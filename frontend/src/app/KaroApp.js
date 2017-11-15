'use strict';
const Radio = require('backbone.radio');
const Backbone = require('backbone');
const Marionette = require('backbone.marionette');

// Model
const User = require('../model/User');

// Collection
const UserCollection = require('../collection/UserCollection');

const KEvIn = require('../model/KEvIn');

// Router
const AppRouter = require('./../router/StaticRouter');

// View
const UserInfoBarView = require('../view/UserInfoBarView');

const PageLayout = Marionette.View.extend({
    template() {
        return;
    },
    regions: {
        userinfo: '#userInfoBar',
        content: '.content'
    }
});

module.exports = window.KaroApp = Marionette.Application.extend({
    region: '.container',

    initialize: function(config) {
        const me = this;
        this.config = config;
        console.info('App init');
        Backbone.emulateHTTP = true;

        this.nav2app = {
            zettel: 'messaging',
            spiele: 'game'
        };
        this.availableApps = {
            messaging: require('./MessagingApp'),
            game: require('./GameApp')
        };

        this.authUser = new User();
        this.authUser.url = '/api/users/check';
        this.authUser.fetch();

        this.users = new UserCollection();
        this.users.url = '/api/users';
        this.users.fetch();

        this.navigator = Radio.channel('navigator');
        this.dataProvider = Radio.channel('data');
        this.dataProvider.reply('users', function() {
            return me.users;
        });

        this.dataProvider.reply('user:logged:in', function() {
            return me.authUser;
        });

        this.dataProvider.reply('config', () => {
            return this.config;
        });

        this.kevin = new KEvIn();

        this.router = new AppRouter({
            app: this
        });
    },

    switchNav(nav) {
        console.info('Switch to nav', nav);
        const app = this.nav2app[nav];
        this.switchApp(app);
    },

    switchApp(appname) {
        console.info('Switch to app', appname);
        this.initApp(appname);
        this.layout.getRegion('content').detachView();
        this.layout.showChildView('content', this.apps[appname].layout);
        this.currentApp = appname;
    },

    initApp(appname) {
        if (appname in this.apps) {
            return;
        }

        this.apps[appname] = new this.availableApps[appname](this.config);
        // they need to start themselves
        // app.start();
    },

    start: function() {
        console.info('App start');

        this.layout = new PageLayout({
            el: '.container'
        });
        this.layout.on("navigate", function(href) {
            me.navigate(href);
        });


        this.apps = {};

        this.layout.showChildView('userinfo', new UserInfoBarView({
            model: this.authUser
        }));

        Backbone.history.start({pushState: true});
    },

    navigate: function(href) {
        let url = href.replace(window.location.origin, '');
        if (url.substr(0, 1) === '/') {
            url = url.substr(1);
        }

        // reset
        this.resetNavState();

        /**
         * Aktuelle nur URLs mit 1 oder 2 Teilen, also /mitteilungen und /mitteilungen/username
         * @type {Array|*}
         */

        const parts = url.split('/');
        const nav = parts.shift();
        const data = parts.shift();

        console.log('Navigate', nav, data);

        this.switchNav(nav);

        // setz die URL im Browser ohne event
        Backbone.history.navigate(url, {
            trigger: false
        });

        this.navigator.trigger(nav, data);
    },

    resetNavState: function() {
    },


    register: function() {
    }
});
