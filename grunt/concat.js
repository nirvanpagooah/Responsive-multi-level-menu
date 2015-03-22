module.exports = {
    js: {
        src: ['src/assets/js/**/!(jquery-1.10.2.min).js'],
        dest: 'src/assets/js/app-build.js',
    },
    css: {
    	src: ['src/assets/css/**/*.css'],
    	dest: 'src/assets/css/styles.css'
    }
};