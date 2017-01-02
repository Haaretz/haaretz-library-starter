(function (exports) {
'use strict';

/**
 *  DEMO MODULE
 *
 * nothing
 *
 * @module demo-module
 * @license MIT
 */

var method = function method(param) {
  return param > 0;
};
function asyncMethod() {
  return Promise.resolve(42);
}
function unused() {
  this.code = 'unusedPath';
}

exports.method = method;
exports.asyncMethod = asyncMethod;
exports.unused = unused;
exports['default'] = method;

}((this.demoModule = this.demoModule || {})));

//# sourceMappingURL=demo-module.js.map