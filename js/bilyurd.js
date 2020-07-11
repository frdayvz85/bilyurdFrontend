// const nav = document.querySelector('nav');

// window.onscroll = function(){
//   var top = window.scrollY;
//   // console.log(top);
//   if(top>=100){
//     nav.classList.add('cngColor')
//   }else{
//     nav.classList.remove('cngColor')
//   }
// }


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar-menu');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle('toggle')
})