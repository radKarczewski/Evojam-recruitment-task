var fs = require('fs');

var getFiles = function(){
    var content = fs.readFileSync('src/index.html').toString();
    var patt = new RegExp("^<script");
    var pattHttp = new RegExp("^http:");
    var done = [];

    content.split(/\n/).forEach(function(line){
        line = line.replace(/\s+/g, '');
        if(patt.test(line)){
            var n = line.search('src="');
            var res = line.substring(n+5, line.length);

            var n2 = res.search('"');
            var result = res.substring(0, n2);

            if(!pattHttp.test(result)){
                done.push("dist/build/"+result);
            }
        }

    });
    return done;
}

var concat = {
  options: {
    stripBanners: true
  },
  js: {
    src: [
      getFiles()
    ],
    dest: 'dist/release/smartglobe-src.js',
    nonull: true
  },

  css: {
    src: [
        'dist/build/lib/**/*.css',
        'dist/build/sass/styles.css',
    ],
    dest: 'dist/release/css/smartglobe-src.css',
    nonull: true
  }
}
module.exports = function (grunt) {
  grunt.config.set('concat', concat);
}
