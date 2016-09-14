var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', upload.single('pic'), function (req, res, next){
  console.log('post received');
  const size = (req.file.size / 1000 + " Kb");
  const originalname = (req.file.originalname);
  const mimetype = (req.file.mimetype);
  res.redirect(`/details?name=${originalname}&mimetype=${mimetype}&size=${size}`);
});
module.exports = router;
