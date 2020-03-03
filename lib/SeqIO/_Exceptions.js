"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseError = ParseError;

function ParseError(message) {
  this.message = message;
  this.name = "ParseError";
}