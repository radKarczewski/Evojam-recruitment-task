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

                // cache: <sec>,
                // showDir : true,
                // autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: false,

                // specify a logger function. By default the requests are
                // sent to stdout.
                // logFn: function(req, res, error) { },

                // Proxies all requests which can't be resolved locally to the given url
                // Note this this will disable 'showDir'
                // proxy: "http://someurl.com",

                /// Use 'https: true' for default module SSL configuration
                /// (default state is disabled)
                // https: {
                //     cert: "cert.pem",
                //     key : "key.pem"
                // },

                // Tell grunt task to open the browser
                openBrowser : false,

                // customize url to serve specific pages
                // customPages: {
                //     "/readme": "README.md",
                //     "/readme.html": "README.html"
                // }

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
        },
        // 'sanitize': {
        //     options: {
        //     },
        //     files: {
        //         src: [
        //             'dist/build/ts/**/*.js'
        //         ]
        //     }
        // }
    });
    grunt.loadTasks('tasks');

    grunt.registerTask('styles', [
        "sass:build"
    ]);

    grunt.registerTask('scripts', [
        'ts',
        // 'sanitize'
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
        'copy:initBuild'
    ]);

}
