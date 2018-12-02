const _ = require('underscore');
const Marionette = require('backbone.marionette');
const EditorToolsLayout = require('./EditorToolsLayout');
const EditorMapView = require('../view/editor/EditorMapView');
const EditorCodeView = require('../view/editor/EditorCodeView');
const EditorImageTranslatorLayout = require('./EditorImageTranslatorLayout');

module.exports = Marionette.LayoutView.extend({
    initialize(options) {
        options = options || {};
        if (!options.editorApp) {
            console.error('No editorApp passed to EditorLayout');
            return;
        }
        this.editorApp = options.editorApp;
        _.bindAll(this, 'onShow');
    },
    regions: {
        'tools': '.editor-tools-container',
        'mapview': '.editor-mapview-container',
        'codeview': '.editor-codeview-container',
        'imageTranslator': '.editor-imagetranslator-container',
    },
    className: 'editorAppView',
    template: window.JST['editor/layout'],
    onShow() {
        // add all subviews into the rendered view
        this.tools.show(new EditorToolsLayout({
            editorApp: this.editorApp,
        }));

        this.mapview.show(new EditorMapView({
            viewsettings: this.editorApp.viewsettings,
            editorsettings: this.editorApp.editorsettings,
            model: this.editorApp.map,
        }));

        this.codeview.show(new EditorCodeView({
            model: this.editorApp.map,
        }));

        this.imageTranslator.show(new EditorImageTranslatorLayout({
            imageTranslator: this.editorApp.imageTranslator,
            map: this.editorApp.map,
        }));
    },
});
