const router = require("express").Router();
const BookController = require('./bookcontroller');


router.post("/api/books/create" , BookController.CreateBook);
router.get("/api/books/getAll" , BookController.ReadAllBooks);
router.delete("/api/books/delete/:id" , BookController.DeleteBook);
router.put("/api/books/update/:id" , BookController.UpdateBook);




module.exports = router;