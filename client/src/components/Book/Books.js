import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Book from './Book'
import './Book.css'
const Url = "http://localhost:5008/books/"


const fetchHandler = async() =>{
    return await axios.get(Url).then((data)=>data).catch((err)=>console.error(err))
}

const Books = () => {

const [books,setbooks] = useState()

useEffect(() => {
  fetchHandler().then((res)=>setbooks(res.data.books)).catch((err)=>console.error(err))
},[])
console.log(books)


  return (
    <div>
        <ul>
            {books && books.map((books,id)=>(
                <li key={id} >
                    <Book books={books}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Books