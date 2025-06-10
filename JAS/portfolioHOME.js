'use strict';
const Loading=document.querySelector('#Loading');

window.addEventListener('load',()=>{
  Loading.animate(
    {
      opacity:[1,0],
      visibility:'hidden',
    },
    {
      duration:2000,
      delay:1200,
      easing:'ease',
      fill:'forwards',
    }
  );
});