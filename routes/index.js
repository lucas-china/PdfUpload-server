var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', function(req, res) {
  res.send('pong');
});

router.post('/', function(req, res, next){
  var formidable = require('formidable');
  var fs = require('fs');
  var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
      
      var oldpath = files.pdf.path;
      var newpath = '/Users/lucassantanabrito/Documentos/iOS/Freelancer/' + files.pdf.name;

      fs.rename(oldpath, newpath, function (err) {

        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();

      });
    });
});

module.exports = router;
