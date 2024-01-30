const student={
    fullname:"ashutosh mohanty",
    marks:94.4,
    printmarks:function(){
        console.log("marks= ",this.marks)
    },
}

const employee={
    calctax(){
        console.log("tax rate is 10%")
    }
}

employee.__proto__=student

class Toyata{
    start(){
        console.log("start");
    }
stop(){
    console.log("stop");
}

setbrand(brand){
    this.brandname=brand;     //brandname is the property of object, just like marks is a property of student object  
}
}

let fortuner=new Toyata()  //object creation
let lexus=new Toyata()

//inheritance
class parent{
    hello(){
        console.log("hello")
    }
}
class child extends parent{}

let obj = new child()