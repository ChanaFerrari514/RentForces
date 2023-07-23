const slonik = require('slonik');
console.log('DB_URL: ' + process.env.DB_URL);
module.exports = slonik.createPool(process.env.DB_URL);