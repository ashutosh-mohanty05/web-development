const fs = require("fs")
console.log(fs);

console.log("starting");

fs.writeFile("ashu2.txt","ashu is a good boy2",()=>{
    console.log("done");
    fs.readFile("ashu2.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
})
fs.appendFile("ashu.txt"," ashutosh",(e,d)=>{
    console.log(d);
    
})
console.log("ending");
