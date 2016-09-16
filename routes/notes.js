var express = require('express');
var router = express.Router();
var Note = require('../models/note');

router.get('/', function(req, res) {
 Note.find( function(err, notes, count ) {
   res.send(notes);
 });
});


router.post('/note_template', function(req, res) {
  var note = req.body;
   res.render('note', { id: note.id, title: note.title, complete: note.complete });
});





module.exports = router;
