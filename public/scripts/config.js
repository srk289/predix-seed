/* global requirejs, define */
/* jshint camelcase: false */
/* jshint unused: false */

'use strict';
/**
* This file sets up the basic module libraries you'll need
* for your application.
*/
requirejs.onError = function(err) {
    //console.log(err.requireType);
    if (err.requireType === 'timeout') {
        //console.error('modules: ' + err.requireModules);
    }
    throw err;
};
/**
* RequireJS Config
* This is configuration for the entire application.
*/
require.config({
    enforceDefine: false,
    xhtml: false,
    //Cache buster
    //urlArgs : '_=' + Date.now(),
    waitSeconds: 15,
    config: {
        text: {
            env: 'xhr'
        }
    },
    paths: {
        'bower_components': '../bower_components',
        'px-datasource': '../bower_components/px-datasource/dist/px-datasource.min',

        directives: './directives',

        // Named References
        config: './config',
        app: './app',

        //Angular App Modules
        'widgets-module': './widget-module',
        'sample-module': './sample-module',

        // angularjs + modules
        angular: '../bower_components/angular/angular',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap.min',

        // angular ui router
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router.min',

        // Require JS Plugins
        text: '../bower_components/requirejs-plugins/lib/text',
        order: '../bower_components/requirejs-plugins/src/order',
        async: '../bower_components/requirejs-plugins/src/async',
        depend: '../bower_components/requirejs-plugins/src/depend',
        font: '../bower_components/requirejs-plugins/src/font',
        goog: '../bower_components/requirejs-plugins/src/goog',
        image: '../bower_components/requirejs-plugins/src/image',
        json: '../bower_components/requirejs-plugins/src/json',
        mdown: '../bower_components/requirejs-plugins/src/mdown',
        noext: '../bower_components/requirejs-plugins/src/noext',
        propertyParser: '../bower_components/requirejs-plugins/src/propertyParser',
        Markdown: '../bower_components/requirejs-plugins/lib/Markdown.Converter',
        css: '../bower_components/require-css/css',
        'css-builder': '../bower_components/require-css/css-builder',
        'normalize': '../bower_components/require-css/normalize',

        underscore: '../bower_components/underscore/underscore',
        jquery: '../bower_components/jquery/dist/jquery.min',

    },
    priority: [
        'jquery',
        'angular',
        'angular-resource',
        'angular-route',
        'bootstrap'
    ],
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': ['angular'],
        'angular-resource': ['angular', 'angular-route', 'angular-ui-router'],
        'angular-sanitize': ['angular'],
        'angular-mocks': {
            deps: ['angular', 'angular-route', 'angular-resource', 'angular-ui-router'],
            exports: 'mock'
        },
        'angular-ui-router': ['angular'],
        underscore: {
            exports: '_'
        },
        'angular-bootstrap': {
            deps: ['angular']
        },
        'px-oauth': {
            deps: ['angular', 'angular-ui-router']
        },
        'px-dashboard': {
            deps: ['angular', 'jquery', 'angular-bootstrap', 'angular-sanitize', 'angular-ui-router', 'px-datasource']
        },
        'px-datasource': {
            deps: ['angular', 'underscore']
        },
        'app': {
            deps: ['angular']
        }

    }
});
