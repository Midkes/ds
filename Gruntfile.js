module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            compact: {
                options: {
                    style: 'compact',
                    sourcemap: 'none'
                },
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            },
            compressed: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.min.css': 'sass/main.scss'
                }
            }
        },
        uglify: {
            dist: {
                files: {

                }
            }
        },
        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            },
            script: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'uglify', 'watch']);
};
