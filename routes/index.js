var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Create new note */
router.post('/', function(req, res) {
 new Note({
   title: req.body.title
 }).save( function( err, note, count ) {
    if (err){
      return res.status(500).json({ error: 'Something went wrong' });
    }

    return res.status(201).send(note);
    // return res.status(200).send({ success: true})
 });
});

/* Update note */

router.put('/:id', function(req, res) {
 Note.findByIdAndUpdate(
 req.params.id,
 { $set: { complete: req.body.complete }},
 function (err, note) {
   if (err){
      return res.status(500).json({ error: 'Something went wrong' });
    }

    return res.status(200).send(note);
 });
});

/* Delete Note */
router.delete('/:id', function(req, res) {
 Note.findById(req.params.id, function(err, note) {
   note.remove();
   res.status(200).send({success: true});
  });
});

module.exports = router;
