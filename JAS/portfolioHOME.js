'use strict';
const Loading=document.querySelector('#Loading');
const Loading_screen=document.querySelector('#Loading-screen');

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
  Loading_screen.animate(
    {
      translate:['0 100vh','0 0','0 -100vh']
    },
    {
      duration:2000,
      delay:800,
      easing:'ease',
      fill:'forwards',
    }
  );
});