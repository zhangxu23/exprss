const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var schema = new mongoose.Schema({ name: 'string', gender: 'number',age:'number' });

var Student = mongoose.model('Student',schema);

const kitty = new Student({name: "23", gender: "0", age: "2"});
kitty.save().then(() => console.log('meow'));
