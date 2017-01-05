require('source-map-support/register');

const jsdom = require('mocha-jsdom'),
  chai = require('chai'),
  sinonChai = require('sinon-chai'),
  chaiDirty = require('dirty-chai'),
  chaiAsPromised = require("chai-as-promised");

global.expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiDirty); //should come last
global.jsdom = jsdom;
