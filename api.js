const express = require('express');
const bodyParser = require('body-parser');
const { Curl } = require('node-libcurl');


const app = express();

app.get('/size/:size/level/:level', async (req, res) => {
  console.log('sending curl request with params', req.params);
  const curl = new Curl();
  curl.setOpt('URL', 'http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9&level=1');
  curl.setOpt('FOLLOWLOCATION', true);
  
  curl.on('end', function (statusCode, data, headers) {
    console.info('--- Status Code: ', statusCode);
    console.info('--- Response Data ---');
    console.info(data);
    console.info('---------------------');
    console.info('--- Total Time: ', this.getInfo( 'TOTAL_TIME'));
    
    res.send(data);
    this.close();
  });
  
  curl.on('error', curl.close.bind(curl));
  curl.perform();
  return;
});

app.listen(3001);

console.log('api started');