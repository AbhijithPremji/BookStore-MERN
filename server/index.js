

const express = require("express")
const mongoose = require("mongoose")
const router = require("../server/routes/bookRoutes")
const env = require("dotenv")
const cors = require("cors")


const app = express()
app.use(express.json());
env.config()
app.use(cors())

app.use("/books",router)


mongoose.connect(`mongodb+srv://Abhijith:${process.env.MONGODB_PASSWORD}@cluster0.snaqyk2.mongodb.net/BOOK-Mac?retryWrites=true&w=majority`)
.then(()=>console.log("DBstarted"))     
.then(()=>{app.listen(5008)})
.catch((err)=>console.log(err))        