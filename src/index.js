/**
 *  DEMO MODULE
 *
 * nothing
 *
 * @module demo-module
 * @license MIT
 */

export const method = function (param) {
  return param > 0;

};
export function asyncMethod(){
  return Promise.resolve(42);
}
export function unused(){
  this.code = 'unusedPath'
}
export default method;
