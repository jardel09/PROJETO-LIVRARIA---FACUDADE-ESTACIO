var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../modelo/frontend.html'));
});

module.exports = router;