import mongoose from "mongoose";
import  express  from "express";
import { Todo } from "./models/Todo.js";

let connection = await mongoose.connect("mongodb://localhost:27017/todo")

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
const todo = new Todo({name:"hey its a first todo",desc:"description of todo",isDone:false})
todo.save()
  res.send('Hello World!')
})
app.get('/a', async(req, res) => {
  let todo = await Todo.findOne({})
  console.log(todo);
  
  res.json({name:todo.name,desc:todo.desc})
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})