async function getdata(){
    //simulate getting data from a server
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500)
    })
}

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function main(){
console.log("loading modules");

console.log("do something else");

console.log("load data");

let data= await getdata()

console.log(data);

console.log("process data");

    console.log("task 2");
}

main()
    
// data.then((v)=>{

// console.log(data);

// console.log("process data");

    // console.log("task 2");
    

// })

