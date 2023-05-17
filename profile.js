const refund = document.querySelector('#refund');
const data = document.querySelector('#data');
const review = document.querySelector('#review');
const order = document.querySelector('#order');
refund.addEventListener('click', (e) => {
    e.preventDefault();
    data.innerHTML = '<h1 class="text-center text-danger">No Refund Available!</h1>';
   data.classList.add("pb-5");
});

review.addEventListener('click', (e) => {
    e.preventDefault();
    data.innerHTML = '<p class="text-center text-secondary-emphasis">~"Excellent quality and taste of fresh, vibrant veggies with a good variety and neat packaging. Highly recommend this vendor from my recent  order."</p>';
   data.classList.add("pb-5");
});

order.addEventListener('click', (e) => {
    e.preventDefault();
    data.innerHTML = `<div class="card ">
    <div class="textBox">
      <div class="textContent">
        <p class="h1">Order Status</p>
        <span class="span">delivered by <br>30th may,2023</span>
      </div>
      <p class="p">Shipment In-Transit</p>
    <div>
  </div></div></div>`;
   data.classList.add("pb-5");
});


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