var sass = {
  build: {
    options: {
      trace: true,
      debugInfo: true,
      sourcemap: "none",
      style: 'expanded',
      noCache: true
    },
    files: {
      'dist/build/sass/styles.css': 'src/sass/styles.scss'
    }
  }
}
module.exports = function (grunt) {
  grunt.config.set('sass', sass);
}