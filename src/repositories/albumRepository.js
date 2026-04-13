const { getDb } = require('../config/mongodb');
const { ObjectId } = require('mongodb');

const collection = () => getDb().collection('albums');

module.exports = {
  findAll: async () => {
    return await collection().find({}).toArray();
  },

  findById: async (id) => {
    return await collection().findOne({ _id: new ObjectId(id) });
  },

  create: async (data) => {
    const result = await collection().insertOne(data);
    return { _id: result.insertedId, ...data };
  },

  update: async (id, data) => {
    const result = await collection().findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: 'after' }
    );
    return result;
  },

  remove: async (id) => {
    await collection().deleteOne({ _id: new ObjectId(id) });
  },
};