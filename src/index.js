/**
 *  DEMO MODULE
 *
 * nothing at all
 *
 * @module demo-module
 * @license MIT
 */

export const method = function method(param) {
  if (param === 15) {
    throw new Error({ message: ('this is not checked') });
  }
  return param > 0;
};

export function asyncMethod() {
  return Promise.resolve(42);
}

export function unused() {
  this.code = 'unusedPath';
}
