'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackconfig = require('../webpackconfig.dev');

var _webpackconfig2 = _interopRequireDefault(_webpackconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpackconfig2.default);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: _webpackconfig2.default.output.publicPath
}));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    (0, _open2.default)('http://localhost:' + port);
  }
});
//# sourceMappingURL=srcServer.js.map