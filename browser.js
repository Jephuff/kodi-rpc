require('whatwg-fetch');
module.exports = require('./api.js')(window.fetch);
