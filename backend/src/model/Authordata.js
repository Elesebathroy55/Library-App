const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
//mongoose.connect('mongodb+srv://userone:userone@myfsdproject.1vykv.mongodb.net/library?retryWrites=true&w=majority');

const AuthorSchema = new Schema({
    name: String,
    books: String,
    country: String,
    img: String
});

const Authordata = mongoose.model('authordata', AuthorSchema);

module.exports = Authordata;
