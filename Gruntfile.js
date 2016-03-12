/*
 * grunt-cssflow
 * https://github.com/allanhortle/grunt-cssflow-git
 *
 * Copyright (c) 2014 Allan Hortle
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        // Configuration to be run (and then tested).
        cssflow: {
            less: {
                options: {
                    preprocessor: 'less'
                },
                files: {
                    'tmp/mainLess.css': ['test/mainLess.less'],
                }
            }
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // By default, lint and run all tests.
    grunt.registerTask('default', ['cssflow']);

};
