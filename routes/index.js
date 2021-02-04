const express = require('express');
const router = express.Router();
const request = require('request');


/* GET home page. */
router.get('/', function(req, res) {
  let obj = {};

  request('https://dog.ceo/api/breeds/image/random', (err, resp, body) => {
  
    if (err) {
      console.log('ERROR!');
    } else {
      const getBody = JSON.parse(body);
      obj.getImage = getBody.message;
    }
    res.render('index', obj);

  })

});

module.exports = router;
