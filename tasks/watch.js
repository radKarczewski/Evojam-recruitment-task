var watch = {
  ts: {
    files: ['src/ts/**/*.ts'],
    tasks: ['scripts'],
    options: {
      livereload: true,
      debug: false,
      debounceDelay: 100
    }
  },
  sass: {
    files: ['src/sass/**/*.scss'],
    tasks: ['styles'],
    options: {
      livereload: true,
      debug: false,
      debounceDelay: 100
    }
  },
  html: {
    files: ['src/**/*.html'],
    tasks: ['copy:htmlBuild'],
    options: {
      livereload: true,
      debug: false,
      debounceDelay: 100
    }
    
  },
  translate: {
    files: ['src/ts/translate/**/*.json'],
    tasks: ['copy:translate'],
    options: {
      livereload: true,
      debug: false,
      debounceDelay: 100
    }
    
  }
}
module.exports = function (grunt) {
  grunt.config.set('watch', watch);
}
