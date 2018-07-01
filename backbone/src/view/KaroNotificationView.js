const _ = require('underscore');
const Backbone = require('backbone');

module.exports = Backbone.View.extend(/** @lends KaroNotificationView */ {
    tagName: 'li',
    className: 'notification',
    /**
     * @constructor KaroNotificationView
     * @class KaroNotificationView
     */
    initialize: function() {
        _.bindAll(this, 'render', 'done');
        // this.render();
        this.listenTo(this.model, 'remove', this.done);
    },
    events: {
        'click .close': 'remove',
    },
    remove: function() {
        this.model.destroy();
    },
    done: function() {
        let me = this;
        this.$el.hide({
            effect: 'slide',
            direction: 'up',
            complete: function() {
                me.$el.remove();
            },
        });
    },
    render: function() {
        let text = this.model.get('text');
        let html = '';
        this.el.style.position = 'relative';
        this.$el.addClass(this.model.get('level'));
        if (this.model.get('imgUrl')) {
            this.$el.addClass('withImage');
            html += '<img class="notification-image" src="' + this.model.get('imgUrl') + '">';
        }
        html += '<div class="notification-message">' + text + '</div>';
        html += '<img src="/images/x.png" class="close" style="position: absolute; right: 0px; top: 0px">';
        // html += '<div stlye="clear: both"></div>';
        this.$el.html(html);
        return this;
    },
});
