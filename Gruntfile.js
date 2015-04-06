module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: '<%= pkg.name %>.css.map',
                    sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
                },
                src: 'less/bootstrap.grid.less',
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');

    // CSS distribution task.
    grunt.registerTask('less-compile', ['less:compileCore']);
    grunt.registerTask('dist-css', ['less-compile']);


    grunt.registerTask('default', ['less-compile']);

};