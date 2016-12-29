const glob = require('glob'),
  jsdom = require('mocha-jsdom'),
  chai = require('chai'),
  sinonChai = require('sinon-chai'),
  chaiAsPromised = require("chai-as-promised");

global.expect = chai.expect;
chai.use(sinonChai);
chai.use(chaiAsPromised);
global.jsdom = jsdom;
require('babel-register');
const System = require('systemjs');
require('../jspm.config.js') //Or whatever your config file is called

//
//Fixup SystemJS (more on this in a second)
//
