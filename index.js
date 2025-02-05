const btnElement=document.querySelector("button");
const spanElement=document.querySelector("span");


btnElement.addEventListener("click",()=>{
    let youName=prompt("please enter your name here?")
    spanElement.textContent=youName
})