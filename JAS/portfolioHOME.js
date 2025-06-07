'use strict';
const HeaderMenu=document.querySelectorAll('.Menu');

HeaderMenu.forEach(menu=>{
  menu.addEventListener('mouseenter',()=>{
    menu.style.backgroundColor='black';
    menu.style.color='white';
  });
  menu.addEventListener('mouseleave',()=>{
    menu.style.backgroundColor='';
    menu.style.color='';
  });
});