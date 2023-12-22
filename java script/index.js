console.log('hello world');
let isproved=false;
let name=undefined;
let color=null;

let animal={
    x:"cow",
    legs:4
}
console.log(animal.x);
console.log(animal["legs"]);

console.log(animal);

let games=["valorant","gta","asphalt","nfs","beach buggy"];
console.log(games[3])
console.log(games.length)

function phone(phn){                                //phn is a parameter
    console.log('ashutosh'+ phn);
}
phone(' mohanty');                                   //mohanty is a argument which is passed to the parameter named 'phn'.



function pc(feature,nm){
    console.log('hp is'+ feature + ' and company is '+ nm )                      //multiple parameters
}
pc(' windows',' hp')


//performing task with function
function square(num){
    return num*num;}
console.log(square(2));

