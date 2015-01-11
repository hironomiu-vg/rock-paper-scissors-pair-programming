module.exports = function(grunt) {
    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('config.json'), 

        less: {
            build : {
                src: ['src/styles/base.less'],
                dest: '<%= config.target %>/css/base.css'
            }
        },
        csslint:{
            check: {
                src: '<%= less.build.dest %>'
            }
        },
        cssmin: {
            minimize: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    '<%= config.target %>/css/base.min.css': '<%= less.build.dest %>'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            files: ['<%= config.target %>/js/rock-paper-scissors.js','<%= config.target %>/index.html','src/styles/*.less'],
            tasks: ['jshint','less','csslint','cssmin']
        },
        
        connect: {
            server: {
                options: {
                    port: '<%= config.port %>',
                    hostname: '<%= config.host %>',
                    base: '<%= config.target %>'
                }
            }
        },
        jshint: {
            files: [
              '<%= config.target %>/js/rock-paper-scissors.js',
              'Gruntfile.js',
              'package.json',
              'test/**/*.js',
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // tasks
    grunt.registerTask('default',['jshint','less','csslint','cssmin','connect','watch']);

};
