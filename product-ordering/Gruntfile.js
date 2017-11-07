module.exports = function (grunt) {
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['./scripts/*.js', '!node_modules/**/*.js'],
        tasks: ['eslint', 'browserify', 'uglify'],
        options: {
          spawn: false
        }
      }
    },
    eslint: {
      all: ['scripts/*.js', '!node_modules/**/*.js'],
    },
    browserify: {
      dist: {
        files: {
          'scripts/bundle.js': ['scripts/main.js']
        }
      }
    },
    uglify: {
      options: {
        banner: "/*! <%= pkg.name %> <%= grunt.template.today('yyyy-mm-dd') %> */\n"
    },
      build: {
        files: [{
          expand: true,
          cwd: 'scripts/',
          src: 'bundle.js',
          dest: 'build/',
          ext: '.min.js'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-eslint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('default', ['eslint', 'uglify', 'browserify', 'watch'])
}
