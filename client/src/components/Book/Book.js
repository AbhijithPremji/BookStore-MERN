import React from 'react'
import {Button} from '@mui/material'
import './Book.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Book = (props) => {
    const {_id,bookname,author,description,price,image,availability} = props.books
   

    const history = useNavigate()

    const deleteHandle = async() =>{
       await axios.delete(`http://localhost:5008/books/${_id}`).then((res)=>res.data)
       .then(()=>history("/"))
       .then(()=>history("/books"))
       
       .catch((err)=>console.log(err))
       window.location.reload(true)
       history("/add")
    }
  return (
    <div className='card'>

        <img src={image} alt={bookname}/>
        <h5> By {author}</h5>
        <h2>{bookname}</h2>
        <p>{description}</p>
        <h3>Rs: {price}</h3>
        <h6>availability:{availability}</h6>
        <Button sx={{mt:'auto'}} LinkComponent={Link} to={`/books/${_id}`} >Update</Button>
        {console.log(_id)}
        <Button sx={{mt:'auto'}} onClick={deleteHandle} >Delete</Button>

    </div>
  )
}

export default Book