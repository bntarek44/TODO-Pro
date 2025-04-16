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
        res.status(400).json({ message: err.message || "Something went wrong" });
    }
}

//function for readind all books
exports.getAllBooks = async function (req , res) {
    try{
        let books =await BookModel.find();
        if(books.length ===0){
            res.json({message : "There is no books yet , please go to creating page from here " , link: req.protocol + "://" + req.get("host") + "/api/books/create"})
        }else{
            res.json({message : "Hello, These are all books" , data : books});
        }
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message || "Something went wrong" });
    }
}





//function for deleting an book(only access for Admins)
exports.DeleteBook = async function (req , res) {
    try{
        const deleted = await BookModel.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({message : "Book is deleted successfully" , data : []})
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message || "Something went wrong" });
    }
}

//function for updating an book(only access for Admins)
exports.UpdateBook = async function(req , res){
    try{
        let newData = req.body
        const updated = await BookModel.findByIdAndUpdate(req.params.id, newData, { new: true });
        if (!updated) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.json({ message: "Book is updated successfully", data: updated });                
    }catch(err){
        console.log(err);
        res.status(400).json({ message: err.message || "Something went wrong" });
    }
}