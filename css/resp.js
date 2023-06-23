var counter=1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter++;
    if(counter>5){
        counter=1;
    }
}, 5000);
burger = document.querySelector('.burger');
logo = document.querySelector('.logo');
list = document.querySelector('.list');

burger.addEventListener('click', ()=>{
        logo.classList.toggle('visible');
        list.classList.toggle('visible');
    })