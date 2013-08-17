module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	// Sass & SCSS
	sass: {

	  //Release Build
	  dist: {

		options: {

		  style: 'compressed',
		  lineNumbers: false,
		  noCache: true,
		},

		files: [
		  {
			expand: true,
			cwd: '<%= pkg.loc %>/assets/scss/',
			src: ['*.scss', '!_*.scss'],
			dest: '<%= pkg.loc %>/assets/css/',
			ext: '.css',

		  },
		],

	  },

	  //Development Build
	  dev: {

		options: {

		  style: 'compact',
		  lineNumbers: true,
		  noCache: true,
		},

		files: [
		  {
			expand: true,
			cwd: '<%= pkg.loc %>/assets/scss/',
			src: ['*.scss', '!_*.scss'],
			dest: '<%= pkg.loc %>/assets/css/',
			ext: '.css',

		  },
		],

	  }

	},

	// Watch for Changes in my files
	watch: {

	  //Files to Watch for changes
	  files: ['assets/scss/**/*.scss'],

	  //On Save at the above paths, run these tasks
	  tasks: ['sass:dev'],

	  //Live Reload injects files in the Browser
	  livereload: {

		options: {
		  livereload: true
		},

		//Inject CSS files on being changed, which will happen only after completion of sass
		files: ['assets/css/main.css'],
	  }
	  
	},

  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default task(s).
  grunt.registerTask('default', ['sass:dev', 'watch']);
  grunt.registerTask('release', ['sass:dist']);


};