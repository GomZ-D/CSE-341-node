const router = require('express').Router();
// const controller = require('../controller');
const contacts = require('./contacts')

//LO PASO AL CONTROLLER
// routes.get('/',(req,res,next)=>{
//     res.json('Diego Gomez');
// })
router.use('/', require('./swagger'))

router.use('/', contacts)



// router.get('/', controller.nameFunction)

module.exports = router;