const slide=document.querySelectorAll(".slide");
// console.log(slide.length-1)
let counter=0;

slide.forEach((element,ind)=>
{
    element.style.left= `${ind*100}%`;
})

function slideImage(){
    slide.forEach((elm)=>{
      elm.style.transform=`translateX(-${counter*100}%)`
    })
    
}

function next(){
    console.log("clicked");

    counter = (counter === slide.length-1) ? 0 : counter + 1; 
    slideImage();
  
    
   
}
function previous(){
    console.log("clicked");
    counter = (counter === 0) ? slide.length-1 : counter - 1; 
    slideImage();
}


let hamburgermenu=document.querySelector(".hamburger-menu ");
let navItems=document.querySelector(".nav-items");

hamburgermenu.addEventListener("click",()=>{
    hamburgermenu.classList.toggle("active");
    navItems.classList.toggle("active");
})