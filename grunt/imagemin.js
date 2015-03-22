module.exports = {
	options: {
		cache: false
	},
    dist: {
		files: [{
			expand: true,     
			cwd: 'src/assets',  
			src: ["**/*.{png,jpg,gif}"],
			dest: 'dist/assets'
		}]
	}
};