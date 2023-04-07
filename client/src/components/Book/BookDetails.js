import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormLabel, TextField,Box, Button,Checkbox,FormControlLabel } from '@mui/material'
import axios from 'axios'


const BookDetails = () => {
 const { id } = useParams();
const [input,setinput] = useState()

const [checked,setChecked] = useState(false)
console.log(input)


useEffect(() => {
    const handleFetch = async () => {
        await axios.get(`http://localhost:5008/books/${ id }`)
        .then((res)=>res.data)
        .then((data)=>setinput(data.books))
        
    }
    handleFetch()
}, [id])





const history = useNavigate()

const reqSend = async() =>{
    await axios.put(`http://localhost:5008/books/${ id }`,{
      bookname:String(input.bookname),
      author:String(input.author),
      description:String(input.description),
      price:Number(input.price),
      image:String(input.image),
      availability:Boolean(checked),
    }).then((res)=>res.data)
  }


const handleSubmit = (e) =>{
 e.preventDefault()
 reqSend().then(()=>history("/books"))

}

const handleChange = (e) =>{
    setinput((prevstate)=>({
      ...prevstate,
      [e.target.name]: e.target.value,
      
    }))}
 

 

  return(
    <div>
        {input && (
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
        <Button sx={{backgroundColor:"green"  }}  variant="contained" type='submit'>Submit Updates</Button>
        </Box>
    </form> ) }
    </div>
  )
}

export default BookDetails