const mongodb = require('mongodb');
const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

async function getConversion(req, res) {
  const savedConversions = await db
    .getDb()
    .collection('dataSaved')
    .find()
    .toArray();

  res.status(200).json(savedConversions);
}

async function saveConversion(req, res) {
  const newConversion = {
    firstValue: req.body.firstValue,
    firstUnit: req.body.firstUnit,
    secondValue: req.body.secondValue,
    secondUnit: req.body.secondUnit,
  };
  const response = await db
    .getDb()
    .collection('dataSaved')
    .insertOne(newConversion);
  if (response.acknowledged) {
    return res.status(200).json(response);
  } else {
    res.status(500).json({ message: 'Error inserting data into DB' });
  }
}

async function deleteConversion(req, res) {
  const conversionId = new ObjectId(req.body.id);
  const response = await db
    .getDb()
    .collection('dataSaved')
    .deleteOne({ _id: conversionId });
  if (response.acknowledged) {
    return res.status(200).json(response);
  } else {
    res.status(500).json({ message: 'Error deleting the conversion' });
  }
}

module.exports = {
  getConversion: getConversion,
  saveConversion: saveConversion,
  deleteConversion: deleteConversion,
};
