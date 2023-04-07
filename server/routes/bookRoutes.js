const express = require("express")
const bookController = require("../controller/bookController")
const Book = require("../model/book")

const router = express.Router()

router.get("/", bookController.getAllBooks);  
router.post("/", bookController.addBooks);
router.get("/:id", bookController.getById);
router.put("/:id", bookController.updateBook);
router.delete("/:id",bookController.deleteById);   
 

module.exports = router;   