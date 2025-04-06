const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookSchema = Schema({
    title : String,
    author : String,
    price : Number
});

module.exports = mongoose.model('books' , BookSchema)