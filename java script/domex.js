console.log("hello world")
let cont=document.body.childNodes[1]
cont.firstChild
cont.lastChild
document.firstElementChild.children

let b=document.getElementsByClassName("box")
console.log(b)

b[2].style.backgroundColor="blue"

document.getElementById("z").style.backgroundColor="red"

document.querySelector(".box").style.backgroundColor ="green"

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor ="pink"
})