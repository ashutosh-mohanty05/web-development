async function sleep(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000)
    })
}

function sum(a,b,c){
    return a+b+c
}

(async function main(){
// let a = await sleep()
// console.log(a)                           this is iifa function
// let b = await sleep()
// console.log(b+5)


//     let [x, y, ...rest]=[1,2,3,7,9,4]           ...rest is a variable
//   console.log(x,y,rest);
  
  let obj={
    a:1,
    b:2,
    c:3
  }

  let{a,b}=obj
  console.log(a,b);
  
    let arr= [1,4,6]
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
    
    
})()
