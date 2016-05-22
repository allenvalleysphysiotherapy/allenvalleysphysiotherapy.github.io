module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      dist: {
        files: {
          'ui/css/style.css' : 'ui/scss/style.scss'
        }
      }
    },
    browserSync: {
      bsFiles: {
        src : [
          'ui/css/*.css',
          'index.html'
        ],        
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      },

    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['browserSync', 'watch']);
}