var copy = {
    external: {
        files: [
            { expand: true, cwd: 'external/angular/', src: ['angular.min.js', 'angular.js'], dest: 'src/lib/angular' },
            { expand: true, cwd: 'external/angular-animate/', src: ['angular-animate.min.js'], dest: 'src/lib/angular-animate' },
            { expand: true, cwd: 'external/angular-aria/', src: ['angular-aria.min.js'], dest: 'src/lib/angular-aria' },
            { expand: true, cwd: 'external/angular-ui-router/release', src: ['angular-ui-router.min.js'], dest: 'src/lib/angular-ui-router' },
            { expand: true, cwd: 'external/angular-material/', src: ['angular-material.js', 'angular-material.min.js', 'angular-material.min.css'], dest: 'src/lib/material' },
            { expand: true, cwd: 'external/moment/', src: ['moment.js', 'locale/pl*', 'locale/en-gb*'], dest: 'src/lib/moment' },
            { expand: true, cwd: 'external/d3/', src: ['d3.min.js'], dest: 'src/lib/d3' },
            { expand: true, cwd: 'external/angular-nvd3/dist/', src: ['angular-nvd3.js'], dest: 'src/lib/angular-nvd3' },
            { expand: true, cwd: 'external/nvd3/build/', src: ['nv.d3.min.css', 'nv.d3.js'], dest: 'src/lib/nvd3' },
            { expand: true, cwd: 'external/angular-cookies/', src: ['angular-cookies.min.js'], dest: 'src/lib/angular-cookies' }

        ]
    },
    initBuild: {
        files: [
            { dot: true, expand: true, cwd: 'src', src: ['**/*.*', '!**/*.ts', '!**/*.scss', '**/*htaccess'], dest: 'dist/build' },
        ]
    },
    htmlBuild: {
        files: [
            { expand: true, cwd: 'src', src: ['**/*.html'], dest: 'dist/build' },
        ]
    }
};

module.exports = function(grunt) {
    grunt.config.set('copy', copy);
};