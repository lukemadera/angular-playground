'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-less');

	function init(params) {
		grunt.initConfig({
			less: {
				dev: {
					options: {
					},
					files: {
						"main.css": "_base.less",
					}
				}
			}
		});

		grunt.registerTask('default', ['less:dev']);
	
	}
	init({});

};