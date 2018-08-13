const sass = require('node-sass');

module.exports = grunt => {
  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 8000,
          base: {
            path: 'dist',
            // options: {
            //   //index: 'somedoc.html',
            //   //maxAge: 300000
            // }
          }
        }
      }
    },

    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'dist/main.css': 'src/scss/main.scss'
        }
      }
    },

    watch: {
      readme: {
        files: ['README.md'],
        tasks: []
      }
    }

  });

  grunt.registerTask('default', ['sass']);

  grunt.registerTask('dev', ['sass', 'connect', 'watch']);
};
