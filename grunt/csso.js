module.exports = {
  dist: {
    options: {
      report: 'min',
    },
    files: {
      'dist/assets/css/styles.min.css': ['src/assets/css/styles.css'],
    },
  },
};