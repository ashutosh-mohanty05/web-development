console.log("this is a promise")

let prom1=new Promise((resolve,reject)=>{
    let a= Math.random()
    if(a<0.5){
        reject("no random number was not supported")
    }
    else{
    setTimeout(()=>{
        console.log("yes i am done")
        resolve("ashu")
    },3000)
}
})
let prom2=new Promise((resolve,reject)=>{
    let a= Math.random()
    if(a<0.5){
        reject("no random number was not supported 2")
    }
    else{
    setTimeout(()=>{
        console.log("yes i am done 2")
        resolve("ashu 2")
    },1000)
}
})

let p3= Promise.all([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
