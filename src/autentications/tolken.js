const crypto = require('crypto');

const randomToken = () => crypto.randomBytes(8).toString('hex');

module.exports = randomToken;

// referĂȘncia Erik Yamamoto (@erik-ymmt), citando https://nodejs.org/api/crypto.html#cryptorandombytessize-callback