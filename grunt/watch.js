module.exports = {
	options: {
		livereload: true,
	},
	css: {
		files: [
		'src/assets/scss/**/*.scss'
		],
        tasks: ['sass'],
        options: {
        	interrupt: true,
        	spawn: false,
        },
    },
    js: {
    	files: [
		'src/assets/js/app.js'
		],
        tasks: ['jshint', 'concat:js'],
        options: {
        	interrupt: true,
        	spawn: false,
        },
    },
    site: {
        files: ['**/*.html', '**/*.php']
    }
};