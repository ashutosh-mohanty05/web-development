const express = require('express')
const app = express()
const port = 3000

const blog = require('./routes/blogs')


app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("hey its a get request");

    res.send('Hello World!')
})
 
app.post('/', (req, res) => {
    console.log("hey its a post request");
    res.send('Hello World post')

})
app.get("/index",(req, res) => { 
    console.log("hey its a index");
    res.send('Hello World index')
    res.sendFile('Templates/index.html',{root: __dirname})

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
