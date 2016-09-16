var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//database name
//strictly database stuff
var Note = new Schema({
// Required field parameter
// Unique field
//as many validations as I want
  title : { type: String, required: true },
  description: String,
  updated_at: Date
});


//('Name of Movie', schema)
mongoose.model( 'Note', Note );
mongoose.connect( 'mongodb://localhost/notes');

module.exports = mongoose.model( 'Note', Note );