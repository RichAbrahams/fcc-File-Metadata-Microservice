var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('details', {params: {name:req.query.name, size:req.query.size, mimetype:req.query.mimetype}});
});

module.exports = router;
