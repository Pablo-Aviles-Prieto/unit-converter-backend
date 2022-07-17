const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect(process.env.MONGO_DB_URI);
  database = client.db('conversions');
}

function getDb() {
  if (!database) {
    throw { message: 'Database connection not established!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
};
