const {MongoClient} = require ('mongodb');
const dotenv = require('dotenv');
dotenv.config();

// async function main() {
//     const uri = process.env.MONGODB_URI;
//     const client = new MongoClient(uri);

//     try{
//         await client.connect();
//         console.log('daba base conectado.')
        
//     }catch(e){
//         console.error(e);
//     }finally{
//         await client.close();
//     }
// }

// module.exports.main = main;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};