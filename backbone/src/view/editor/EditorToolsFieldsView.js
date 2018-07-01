const _ = require('underscore');
const Marionette = require('backbone.marionette');
const Map = require('../../model/map/Map');

module.exports = Marionette.ItemView.extend({
    initialize: function(options) {
        options = options || {};
        if (!options.editorsettings) {
            console.error('No editorsettings passed to EditorToolsFieldsView');
            return;
        }
        this.editorsettings = options.editorsettings;
        this.listenTo(this.editorsettings, 'change:buttons', this.update);
        this.listenTo(this.editorsettings, 'change:rightclick', this.update);
        this.listenTo(this.editorsettings, 'change:drawmode', this.update);

        _.bindAll(this, 'setRightclick', 'update', 'selectField', 'selectDrawmode');
    },
    events: {
        'contextmenu .editor-tools-fields-field': 'rightclick',
        'change input': 'setRightclick',
        'mousedown .editor-tools-fields-field': 'selectField',
        'click .editor-tools-fields-drawmode': 'selectDrawmode',
    },

    setRightclick: function() {
        let rightclick = this.$('.editor-tools-fields-rightclick').prop('checked');
        this.editorsettings.set('rightclick', rightclick);
    },

    rightclick: function(e) {
        if (this.editorsettings.get('rightclick')) {
            e.preventDefault();
            return false;
        }
    },

    update: function() {
        let buttons = this.editorsettings.get('buttons');
        this.$('.editor-tools-fields-field').removeClass('activeField');
        this.$('.editor-tools-fields-field[data-field="' + buttons[1] + '"]').addClass('activeField');

        this.$('.editor-tools-fields-drawmode').removeClass('activeField');
        this.$('.editor-tools-fields-drawmode[data-drawmode="' + this.editorsettings.get('drawmode') + '"]')
            .addClass('activeField');

        this.$('.editor-tools-fields-rightclick').prop('checked', this.editorsettings.get('rightclick'));
    },

    selectField: function(e, i) {
        let f = $(e.currentTarget).data('field');
        let w = e.which;
        if ((w == 3) && (!this.editorsettings.get('rightclick'))) {
            return false;
        }
        this.editorsettings.setButtonField(w, f);
    },

    selectDrawmode: function(e, i) {
        let m = $(e.currentTarget).data('drawmode');
        this.editorsettings.set('drawmode', m);
    },

    render: function() {
        this.$el.empty();
        let map = new Map();
        let fieldlists = ['OX', 'SFP', '123456789', 'GLNVTWYZ'];
        let html = '';
        for (let r = 0; r < fieldlists.length; r++) {
            let fieldlist = fieldlists[r];
            for (let i = 0, e = fieldlist.length; i < e; i++) {
                let c = fieldlist[i];
                html += '<img src="/images/mapfields/' + c + '.png?v=201512181836" ';
                html += 'class="editor-tools-fields-field" data-field="' + c + '" title="' + map.FIELDS[c] + '" />';
            }
            html += '<br/>';
        }
        html += '<img src = "/images/draw.png" class="editor-tools-fields-drawmode" data-drawmode="draw" /> ';
        html += '<img src = "/images/floodfill.png"  class="editor-tools-fields-drawmode" data-drawmode="floodfill" />';
        html += '<br />';
        html += '<label>Rechtsklick zum Malen?';
        html += '<input type="checkbox" name="rightclick" class="editor-tools-fields-rightclick"</label>';
        this.$el.html(html);
        this.update();
    },
});
