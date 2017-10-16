'use strict';

var _chai = require('chai');

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Our first test', function () {
  it('should pass', function () {
    (0, _chai.expect)(true).to.equal(true);
  });
});

describe('index.html', function () {
  it('should say hello', function (done) {
    var index = _fs2.default.readFileSync('./src/index.html', 'utf-8');
    _jsdom2.default.env(index, function (err, window) {
      var h1 = window.document.getElementsByTagName('h1')[0];
      (0, _chai.expect)(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    });
  });
});
//# sourceMappingURL=index.test.js.map