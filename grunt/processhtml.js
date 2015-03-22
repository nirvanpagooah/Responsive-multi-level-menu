module.exports = {
  options: {
      data: {
        message: 'Processing index.html!'
      }
    },
    dist: {
      files: {
        'dist/index.html': ['src/index.html']
      }
    }
};