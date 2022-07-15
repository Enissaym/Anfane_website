const navSlide = () =>{ 
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        //toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
            }
        });

        //burger Animation
        burger.classList.toggle('toggle');
    });      
}
navSlide();

jQuery(document).ready(function($){
    $('.count').counterUp({
      delay: 10,
      time: 1000
  });
});









