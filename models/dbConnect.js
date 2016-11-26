const pgp = require('pg-promise')();
const MongoClient = require('mongodb');

const config = process.env.DATABASE_URL || {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS
};

const sqlDB = pgp(config);

const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/react_paint';

function mongoDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  sqlDB,
};
