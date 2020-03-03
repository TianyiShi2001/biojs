"use strict";

require("core-js/modules/es6.regexp.to-string");

var _readline = _interopRequireDefault(require("readline"));

var _fs = _interopRequireDefault(require("fs"));

var _nReadlines = _interopRequireDefault(require("n-readlines"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const liner = new _nReadlines.default("examples/parse/fasta/ce.fasta");
let line;
console.log(liner.next().toString("utf8")[0]);

while (line = liner.next()) {
  console.log(line.toString("utf8"));
}