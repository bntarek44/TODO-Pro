const BookModel = require('./bookmodel');
const mongoose = require('mongoose');


//function for creating an book
exports.CreateBook = async function (req , res) {
    try{
        const {title ,author, price } = req.body
        let newBook = await BookModel.create({title, author, price});
        res.json({message : "Book is created successfully" , data : newBook});
    }catch(err){
        console.log(err);
        res.status(400).send({message : err})
    }
}

//function for readind all books
exports.ReadAllBooks = async function (req , res) {
    try{
        let books =await BookModel.find();
        res.json({message : "Hello, These are all books" , data : books});
    }catch(err){
        console.log(err);
        res.status(400).send({message : err})
    }
}





//function for deleting an book(only access for Admins)
exports.DeleteBook = async function (req , res) {
    try{
            await BookModel.findByIdAndDelete(req.params.id);
            res.json({message : "Book is deleted successfully" , data : []})
    }catch(err){
        console.log(err);
        res.status(400).send({message : err})
    }
}

//function for updating an book(only access for Admins)
exports.UpdateBook = async function(req , res){
    try{
                let newData = req.body
                await BookModel.findByIdAndUpdate(req.params.id ,newData );
                res.json({message : "Book is updated successfully" , data : newData}) 
    }catch(err){
        console.log(err);
        res.status(400).send({message : err})
    }
}