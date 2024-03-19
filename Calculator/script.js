let button=document.querySelector(".button");
let value=document.querySelector(".value");
let toggle=document.querySelector(".toggle");
let btn=document.querySelectorAll("span");
let body=document.querySelector("body");
// value.innerHTML="hello"
toggle.addEventListener("click",()=>{
    body.classList.toggle("dark");
})

// toggle.onclick=function(){
// }

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",function(){
        if(this.innerHTML=="="){
            value.innerHTML=eval(value.innerHTML);
        }
        else{
            if(this.innerHTML=="Clear"){
                value.innerHTML="";

            }
            else{
                value.innerHTML+=this.innerHTML;
            }
        }
    })
    
}