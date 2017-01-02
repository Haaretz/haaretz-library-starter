import {method, asyncMethod} from '../index';

// import System from 'systemjs'

describe('method', function () {
  jsdom();
  it('is a function', function () {
    expect(method).to.be.a('function');
  });
  it('has access to DOM', function () {
    expect(document).to.exist();
  });
  it('should return true for params passed that are greater than 0', function () {
    expect(method(1)).to.be.true();
  });
  it('shows async flows', function () {
    expect(asyncMethod()).to.eventually.equal(42);
  });
  it('uses system', (done) => {
    System.import('buffer').then(buffer => {
        expect(buffer).to.exist();
        done();
      }
    )
  })
});

