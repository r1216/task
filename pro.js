function navSlide() {
const burger=document.querySelector('.burger');
const nav=document.querySelector('.nav-links');
burger.addEventListener('click',()=>
{
    nav.classList.toggle('nav-active');
    
}
)};
    navSlide();
    
    document.getElementById("burger").onclick = function(){
   const form= document.getElementById("form")
    if(form.style.display ==="none")
    {
        form.style.display="block";
    }
    else{
        form.style.display="none";
    }
    const footer= document.getElementById("footer")
    if(footer.style.display ==="none")
     {
         footer.style.display="block";
     }
     else{
         footer.style.display="none";
     }
}


    
    
