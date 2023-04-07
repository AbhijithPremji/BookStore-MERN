const Books = require("../model/book")



 const getAllBooks = async(req,res,next) =>{   
    let books;
    

    try{
        books = await Books.find()
        
    }catch(err){
        console.log(err)
    }
    if(!books){
            return res.status(404).json({message:"no books found"})
        }
            return res.status(200).json({books})
};


const addBooks = async (req,res,next) =>{
    let books;
    let { bookname,author,description,price,availability,image }  = req.body
    try{
        books = new Books({
            bookname,
            author,
            description,
            price,  
            availability,
            image,
        })
        await books.save()
    }catch(err){
        console.error(err)
    }

    if(!books){
        return res.status(500).json({message:"unable to add data"})
    }
    return res.status(201).json({books})
}

const getById = async (req,res) =>{
    let books;
    const id = req.params.id
    try{
        books = await Books.findById(id)
    }catch(err){
        console.log(err)
    }

    if(!books){  
        return res.status(404).json({message:"no books found"})
    }
    return res.status(200).json({books})
}


const updateBook = async(req,res,next) =>{
    let books;
    let id = req.params.id
    const {bookname,author,description,price,availability,image} = req.body
    try{
        books = await Books.findByIdAndUpdate(id,{ 
            bookname, 
            author,
            description,
            price,
            availability,
            image,
        });

         books = await books.save();

    }catch(err){
        console.log(err)
    }

    if(!books){
        return res.status(404).json({message:"update by id failed"})
    }
    return res.status(200).json({books})
}

const deleteById = async(req,res,next) =>{
    let books;
    let id = req.params.id;  
    try{
        books = await Books.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }

    if(!books){
        return res.status(404).json({message:"not found"})
    }
    return res.status(200).json({books})
}


exports.getAllBooks = getAllBooks;
exports.getById = getById;
exports.addBooks = addBooks ; 
exports.updateBook = updateBook;
exports.deleteById = deleteById; 