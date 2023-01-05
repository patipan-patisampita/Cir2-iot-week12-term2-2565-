const dotenv = require('dotenv')
const express = require('express')
const path = require('path')
const app = express()


//set path to .env
dotenv.config({path:'./.env'})
const PORT = process.env.PORT || 4000

//http://localhost:5000/
app.get('/',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/pages/index.html'))
})

//http://localhost:5000/about
app.get('/about',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/pages/about.html'))
})

//http://localhost:5000/profile
app.get('/profile',(req,res)=>{
    return res.status(200).sendFile(path.join(__dirname + '/pages/profile.html'))
})

//404 Not found page
app.use((req,res,next)=>{
    return res.status(404).sendFile(path.join(__dirname + '/pages/missing.html'))
})

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})