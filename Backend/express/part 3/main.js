const express = require('express')
const app = express()
const port = 3000
const blog = require('./routers/blog')

const fs =require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

//Middleware 1- logger for our application
const myLogger = function (req, res, next) {
    console.log(req.headers);
    req.ashu="i am ashutosh"
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    //res.send("hacked by middleware-1")
    next()
}
app.use(myLogger)

//Middleware 2
const myLogger2 = function (req, res, next) {
    console.log('m2')
    req.ashu="ashu bhai"
    next()
}
app.use(myLogger2)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about' + req.ashu)
})
app.get('/contact', (req, res) => {
    res.send('Hello contact')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})