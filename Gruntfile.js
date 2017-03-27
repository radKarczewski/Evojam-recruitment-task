'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-typings');
    grunt.loadNpmTasks('grunt-http-server');
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        typings: {
            install: {}
        },
        "http-server": {

            "dev": {
                root: 'dist/build/',
                port: 8282,
                host: "127.0.0.1",
                ext: "html",
                runInBackground: false,
                openBrowser : true
            }
        },
        processhtml: {
            options: {
                data: {
                }
            },
            release: {
                files: {
                    'dist/release/main.html': ['src/main.html']
                }
            }
        },
        // Bower plugin
        "bower-install-simple": {
            options: {
                color: true,
                directory: 'external',
                update: true,
                command: "update"
            },
            dev: {
            }
        }
    });
    grunt.loadTasks('tasks');

    grunt.registerTask('styles', [
        "sass:build"
    ]);

    grunt.registerTask('scripts', [
        'ts'
    ]);

    grunt.registerTask('external', [
        'bower-install-simple',
        'copy:external'
    ]);

    grunt.registerTask('default', [
        'dev'
    ]);

    grunt.registerTask('dev', [
        'external',
        'typings:install',
        'styles',
        'scripts',
        'copy:initBuild',
        'http-server'
    ]);

}
