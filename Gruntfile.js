module.exports = function(grunt) {

    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            build : {
                src: ['src/style1.less','src/style2.less'],
                dest: 'build/styles.css'
            }
        },
        csslint:{
            check: {
                //src: 'build/styles.css'
                src: '<%= less.build.dest %>'
            }
        },
        cssmin: {
            minimize: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'build/styles.min.css': '<%= less.build.dest %>'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            files: ['original/js/rsp_local.js','original/index.html'],
            tasks: ['jshint']
        },
        
        connect: {
            server: {
                options: {
                    port: 8080,
                    hostname: '192.168.56.14'
                }
            }
        },
        jshint: {
            files: [
              'original/js/rsp_local.js',
              'Gruntfile.js',
              'routes/**/*.js',
              'package.json',
              'test/**/*.js',
              '*.js',
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
