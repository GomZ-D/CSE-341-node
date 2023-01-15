const express = require('express');
const mongodb = require('./db/connect'); 
const bodyParser = require('body-parser');

 
const app = express();
const port = process.env.PORT || 3000;

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

 
app 
    .use(bodyParser.json())
    .use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, Z-key'
      );
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Accesss-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');
      next();
    })
    // .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
    // .use('/', require('./routes'));
//   app.use('/', require('./routes/contacts'));
  app.use('/', require('./routes'));
 
mongodb.initDb((err, mongodb)=>{
    if (err) {
        console.log(err);
    }else {
        app.listen(port, ()=>{
            console.log(`Server running on port ${port}`);
        })   
    }
});




