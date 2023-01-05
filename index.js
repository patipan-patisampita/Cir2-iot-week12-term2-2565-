const express = require('express')
const app = express()

//http://localhost:5000/
app.get('/',(req,res)=>{
    return res.status(200).send("Home page!")
})

//http://localhost:5000/about
app.get('/about',(req,res)=>{
    return res.status(200).send("About Page")
})
//http://localhost:5000/profile
app.get('/profile',(req,res)=>{
    return res.status(200).send("Profile page")
})

app.listen(5000,()=>{
    console.log(`Server running at http://localhost:${5000}`)
})