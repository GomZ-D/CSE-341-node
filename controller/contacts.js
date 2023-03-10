const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

//-------------------------------------
//--FUNCTION TO GET ALL THE COLLECTION
//-------------------------------------
const getAll = async (req, res, next) => {
  try{
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }catch (err) {
    res.status(500).json({message: err.message});
  }
};

//------------------------------------
//--FUNCTION TO GET A SINGLE CONTAT
//------------------------------------

const getSingle = async (req, res, next) => {
  try{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }catch(err) {
    res.status(500).json(err);
}
};

//----------------------------------------
//--Function to update document (contact)
//----------------------------------------
const updateDoc= async (req,res)=>{
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .replaceOne({_id: userId}, contact);
    console.log(result);
    if (result.modifiedCount > 0 ){
      res.status(204).send();
    }else {
      res.status(500).json(result.error || "Error while Updating");
    }
};


//----------------------------------------
//--Function to Delete document (contact)
//----------------------------------------
const deleteDoc= async(req,res)=>{
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .remove({_id:userId},true);
    console.log(result);
    if (result.deletedCount > 0) {
      res.status(204).send();
    }else {
      res.status(500).json(result.error || 'Error while deleting');
    }
};


//----------------------------------------
//--Function to Create document (contact)
//----------------------------------------
const createDoc= async (req,res)=>{
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .insertOne(contact);
    if (result.acknowledged) {
      res.status(201).json(result);
    }else {
      res.status(500).json(result.error || "Error while Creating");
    }

};



module.exports = { getAll, getSingle, updateDoc, deleteDoc, createDoc };

