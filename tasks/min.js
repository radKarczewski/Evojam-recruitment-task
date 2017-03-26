var ngmin = {
    release: {
        files: [{
            expand: true,
            cwd: 'dist/release',
            src: '*.js',
            dest: 'dist/release'
        }]
    }
};

var cssmin = {
  options: {
    preserveComments: false,
    sourceMap: false,
    report: 'gzip'
  },
  dist: {
    src: ['dist/release/css/smartglobe-src.css'],
    dest: 'dist/release/css/smartglobe-src.css'
  }
};
var uglify = {
  options: {
    preserveComments: false,
    sourceMap: false,
    mangle: false,
    report: 'gzip'
  },
  dist: {
    src: 'dist/release/smartglobe-src.js',
    dest: 'dist/release/smartglobe-src.js'
  }
};
module.exports = function (grunt) {
    grunt.config.set('ngmin', ngmin);
    grunt.config.set('cssmin', cssmin);
    grunt.config.set('uglify', uglify);
}
