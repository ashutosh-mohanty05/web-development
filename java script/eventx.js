let button=document.getElementById("btn")

button.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").innerHTML="<b>yay you are clicked</b>enjoy your click "
})
document.addEventListener("keydown",(e)=>{
    console.log(e)
})