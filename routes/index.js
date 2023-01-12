const router = require('express').Router();
const controller = require('../controller');
//LO PASO AL CONTROLLER
// routes.get('/',(req,res,next)=>{
//     res.json('Diego Gomez');
// })

router.get('/', controller.nameFunction)

module.exports = router;