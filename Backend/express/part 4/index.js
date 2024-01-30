const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs')

app.get('/', (req, res) => {
  let sitename="adidas"
  let searchnow="search now"
  res.render("index",{sitename:sitename, searchnow:searchnow})
})

app.get('/blog/:slug', (req, res) => {
  let blogname="this is a blog"
  let blogcontent="its a very good blog"
  res.render("blogpost",{blogname: blogname, blogcontent:blogcontent})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 