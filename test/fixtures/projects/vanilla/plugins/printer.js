module.exports = function () {
  return {
    name: 'printer',
    reporters: {
      userFunction: function (runUserFunction, metadata, cb) {
        if (metadata.name === 'module' && metadata.hookType === 'beforeAll') {
          console.log('About to run a before all')
        }
        runUserFunction(cb)
      }
    }
  }
}
