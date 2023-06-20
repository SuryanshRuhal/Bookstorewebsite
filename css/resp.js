burger = document.querySelector('.burger');
logo = document.querySelector('.logo');
list = document.querySelector('.list');

burger.addEventListener('click', ()=>{
        logo.classList.toggle('visible');
        list.classList.toggle('visible');
    })