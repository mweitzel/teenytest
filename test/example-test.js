var helper = require('./support/helper')
var assert = require('core-assert')

module.exports = function (cb) {
  helper.run('example/test/lib/**/*.js', function (er, result, log) {
    assert.equal(result, false)
    log.assert(
      'TAP version 13',
      '1..9',
      'ok 1 - "bark once" - test #1 in `example/test/lib/dog-test.js`',
      'ok 2 - "bark twice" - test #2 in `example/test/lib/dog-test.js`',
      'ok 3 - "tag frontSaysName" - test #3 in `example/test/lib/dog-test.js`',
      'ok 4 - "tag backSaysAddress" - test #4 in `example/test/lib/dog-test.js`',
      'ok 5 - "adds" - test #1 in `example/test/lib/exporting-an-object.js`',
      'ok 6 - "subtracts" - test #2 in `example/test/lib/exporting-an-object.js`',
      'ok 7 - "a long passing test name" - test #1 in `example/test/lib/multi-word-names.js`',
      'not ok 8 - "a long failing test name" - test #2 in `example/test/lib/multi-word-names.js`',
      '  ---',
      '  message: I fail',
      /stacktrace: Error: I fail/,
      '  ...',
      'not ok 9 - "blueIsRed" - test #1 in `example/test/lib/single-function.js`',
      '  ---',
      '  message: \'blue\' == \'red\'',
      /stacktrace: AssertionError: 'blue' == 'red'/,
      '  ...'
    )
    cb(er)
  })
}
