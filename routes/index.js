const routes = require('express').Router();
const controller = require('../controller');
//LO PASO AL CONTROLLER
// routes.get('/',(req,res,next)=>{
//     res.json('Diego Gomez');
// })

routes.get('/', controller.nameFunction)

module.exports = routes;