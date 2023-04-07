const mongoose = require("mongoose")

const schema = mongoose.Schema
const book = new schema({
    bookname:{
        type: String,
        required:true,
    },
    author:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    price:{
        type: Number,
        required:true,

    }, 
    availability:{
        type: Boolean,

    }, 
    image:{ 
        type: String,
        required: true,   
    },    
}) 

module.exports = mongoose.model("Books",book) 