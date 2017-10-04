const mochaMongoose = require('mocha-mongoose');
const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/example';
mochaMongoose(mongoUri);

const conn = mongoose.createConnection(mongoUri);

describe('some test suite', () => {
  it('does a thing', () => {
    1 + 1;
  });
})
