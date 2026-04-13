const { MongoClient } = require('mongodb');

let db;

const connectMongo = async () => {
  const client = new MongoClient(process.env.MONGO_URI);
  await client.connect();
  db = client.db('products_db');
  console.log('MongoDB conectado');
};

const getDb = () => db;

module.exports = { connectMongo, getDb };