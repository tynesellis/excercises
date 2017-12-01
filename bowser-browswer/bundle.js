(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function add (f, s) {
    return f + s
}

module.exports = add;
},{}],2:[function(require,module,exports){
function divide (f, s) {
    return f / s
}

module.exports = divide;
},{}],3:[function(require,module,exports){
var add = require('./add');
var subtract = require('./subtract');
var multiply = require('./multiply');
var divide = require('./divide');

console.log(add(1,2))
},{"./add":1,"./divide":2,"./multiply":4,"./subtract":5}],4:[function(require,module,exports){
function multiply (f, s) {
    return f * s
}

module.exports = multiply;
},{}],5:[function(require,module,exports){
function subtract (f, s) {
    return f - s
}

module.exports = subtract;
},{}]},{},[3]);
