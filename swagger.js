const swaggerAutogen = require('swagger-autogen')();


const doc = {
    info: {
      title: 'My API',
      description: 'Description',
    },
    host: 'https://cse-341-w01-ulks.onrender.com',
    schemes: ['http'],
  };
  
  const outputFile = './swagger.json';
  const endpointsFiles = ['./routes/index.js'];
  

  
  swaggerAutogen(outputFile, endpointsFiles, doc);