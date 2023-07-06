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
const form= document.querySelector("#form");
const submit= document.querySelector("#submit");

const publickey = "lCC-8ZAow-9SLeOBN";
emailjs.init(publickey);
form.addEventListener("submit",e=>{
    e.preventDefault();
    let info={
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("mail").value,
        phone_no: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_a2kmg9w","template_naw6th7",info).then(function(res){
        alert("SUCESSS!!!")
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("phone").value="";
        document.getElementById("message").value="";

        
    }, (error)=>{
        alert("FAILED!, please retry.")
    })
})
