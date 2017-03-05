import chaiAsPromised from 'chai-as-promised'; <% if (!typescript) { %>
import dirtyChai from 'dirty-chai'; <% } %>
import 'babel-polyfill';

chai.use(chaiAsPromised)
<% if (!typescript) { %> chai.use(dirtyChai); <% } %>

const testsContext = require.context('../../src', true, /\.spec\.(ts|js)$/);
testsContext.keys().forEach(function (path) {
  try {
    testsContext(path);
  }
  catch (err) {
    console.error('[ERROR] WITH SPEC FILE: ', path);  // eslint-disable-line
    console.error(err);  // eslint-disable-line
  }
});
