let menu =document.querySelector('.nav-car ul');
let menuBtn =document.querySelector('#open-menu-btn');
let closeBtn =document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
   
    closeBtn.style.display='inline-block';
    menuBtn.style.display='none';


})
let closenav =()=>{
    menu.classList.toggle('active');
    closeBtn.style.display='none';
    menuBtn.style.display='inline-block';
  }
  closeBtn.addEventListener('click',closenav)