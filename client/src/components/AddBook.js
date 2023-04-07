import React, { useState } from 'react'
import { FormLabel, TextField,Box, Button,Checkbox,FormControlLabel } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddBook = () => {
    const history = useNavigate()
    const [input,setInput] = useState({
        bookname: "",
        author: "",
        description :"",
        price: "",
        image: ""

    })

const handleChange = (e) =>{
setInput((prev)=>({
...prev,
[e.target.name]:e.target.value
})
)};

const handleSubmit = (e) =>{
 e.preventDefault()
 console.log(input,checked)
 submitReq().then(()=>history('/books'))
}

const submitReq = async() =>{
 await axios.post("http://localhost:5008/books",{
    bookname:String(input.bookname),
    author: String(input.author),
    description: String(input.description),
    price: Number(input.price),
    available: Boolean (input.checked),
    image: String(input.image)
 }).then(res=>res.data)
}

const [checked,setChecked] = useState(false)

  return (
    <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={600} alignContent={"center"} alignSelf={"center"} 
        marginRight={"auto"} marginLeft="auto" marginTop={5}
        >
        <FormLabel>Name</FormLabel>
        <TextField value={input.bookname} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='bookname'/>
        <FormLabel>Author</FormLabel>
        <TextField value={input.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'/>
        <FormLabel>Description</FormLabel>
        <TextField value={input.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'/>
        <FormLabel>Price</FormLabel>
        <TextField value={input.price} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name='price'/>
        <FormLabel>Image Link</FormLabel>
        <TextField value={input.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'/>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} label="Available" />
        <Button sx={{backgroundColor:"green"  }}  variant="contained" type='submit'>Submit Book</Button>
        </Box>
    </form>
  )
}

export default AddBook