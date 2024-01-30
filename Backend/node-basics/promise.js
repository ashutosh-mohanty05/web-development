import fs from "fs/promises"
let a= await fs.readFile("ashu.txt")

let b = await fs.writeFile("ashu.txt"," this is amazing promise")
console.log(a.toString(),b);
