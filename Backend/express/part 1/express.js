const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path,handler)
app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.get("/about",(req,res)=>{
    res.send("Hello about")
})

app.get("/contact",(req,res)=>{
    res.send("Hello contact")
})

app.get("/blog",(req,res)=>{
    res.send("Hello blog")
})

app.get("/blog/:slug",(req,res)=>{
    //logic to fetch {slug} from the db
    //for url= http://localhost:3000/blog/hanuman?mode=dark&region=in
    console.log(req.params); //will output { slug: 'hanuman'}; 
    console.log(req.query); //will output { mode: 'dark',region: 'in'}; 
    
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`);
    
}) 
