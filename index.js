require('dotenv').config()

const express = require('express')
// import express from "express"

const app = express()

const port = 4000
// port used to listen 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req,res)=> {
    res.send('<h1>Go to login or signup for profile</h1>')
})

app.get('/instagram', (req,res)=> {
    res.send('bhivanshu.lawaniya')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})