document.addEventListener('DOMContentLoaded', ()=>{updateCartUI()})
const head = document.querySelector('header')
head.style.display ='none'
const lod = document.querySelector('#lod')
lod.style.display ='none'
window.addEventListener('load', function() {
  var loader = document.querySelector('.spinnerContainer');
  loader.style.display = 'none';
head.style.display = 'flex'
lod.style.display = 'block'
});