let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navigation');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true,
  });


const username = document.getElementById('user');
const comment = document.getElementById('comment');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');

function fun1(){
    out1.innerHTML = username.value;
    out2.innerHTML = comment.value;
}

btn1.addEventListener('click', fun1);



