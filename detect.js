var fetch;

if(typeof window === 'undefined') {
  fetch = require('node-fetch');
} else {
  require('whatwg-fetch');
  fetch = window.fetch;
}

module.exports = require('./api.js')(fetch);
