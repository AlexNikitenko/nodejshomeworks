const { request } = require('express');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  // res.send('respond with a resource');
  

 
  res.status(200);
});

module.exports = router;
