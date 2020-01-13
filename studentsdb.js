
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var schema = new mongoose.Schema({ name: 'string', gender: 'number',age:'number' });

module.exports = mongoose.model('Student',schema);


