module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/app/**/*.js']
        },

        csslint: {
            strict: {
                src: ['src/styles/**/*.css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('default', ['jshint', 'csslint']);

};