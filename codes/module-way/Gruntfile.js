module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'app/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);

}