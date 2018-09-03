const sass = require('node-sass');

module.exports = grunt => {
  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig(

    {
      clean: ['dist'],

      connect: {
        server: {
          options: {
            port: 8000,
            base: {
              path: 'dist',
            }
          }
        }
      },

      copy: {
        html: {
          expand: true,
          cwd: 'src/html/',
          src: '**/*.html',
          dest: 'dist/',
          flatten: true,
          filter: 'isFile',
        },
        images: {
          expand: true,
          cwd: 'src/images/',
          src: ['**/*.jpg', '**/*.png', '**/*.gif'],
          dest: 'dist/images/',
          flatten: true,
          filter: 'isFile',
        }
      },

      sass: {
        options: {
          implementation: sass,
          sourceMap: true
        },
        dist: {
          files: {
            'dist/css/main.css': 'src/scss/main.scss'
          }
        }
      },

      watch: {
        css: {
          files: 'src/scss/**/*.scss',
          tasks: ['sass']
        },
        images: {
          files: ['src/images/**/*.jpg','src/images/**/*.png','src/images/**/*.gif'],
          tasks: ['copy:images']
        },
        html: {
          files: 'src/html/**/*.html',
          tasks: ['copy:html']
        },
        readme: {
          files: ['README.md'],
          tasks: []
        }
      }
    }

  );

  grunt.registerTask('default', ['clean', 'copy', 'sass']);

  grunt.registerTask('dev', ['clean', 'copy', 'sass', 'connect', 'watch']);
};
