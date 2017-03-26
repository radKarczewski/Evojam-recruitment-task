var ts = {
  // dev: {
  //   src: ['*.ts','src/ts/**/*.ts'],
  //   options: {
  //     target: 'es5',
  //     module: 'commonjs',
  //     sourceMap: false
  //   }
  // },
  build: {
    src: ['src/ts/**/*.ts'],
    dest: 'dist/build/ts',
    options: {
      target: 'es5',
      module: 'commonjs',
      sourceMap: false,
      fast: 'never'
    }
  },
  // deploy: {
  //   src: ['src/ts/**/*.ts'],
  //   dest: 'dist/build/ts',
  //   options: {
  //     target: 'es5',
  //     module: 'commonjs',
  //     sourceMap: false,
  //     fast: 'never'
  //   }
  // }
  
}

module.exports = function (grunt) {
  grunt.config.set('ts', ts);
}
