'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _schedule = require('./schedule');

var _schedule2 = _interopRequireDefault(_schedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
server.use('/', _schedule2.default);

server.listen(3001, function () {
  console.log('trip-planner app listening on port 3001!');
});