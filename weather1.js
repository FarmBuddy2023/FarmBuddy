
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


var temp = document.getElementById('temp');
var dtemp = document.querySelectorAll('.dtemp');
function getLocation() {   if (navigator.geolocation) { 
  navigator.geolocation.watchPosition(showPosition);   } else { 
  x.innerHTML = "Geolocation is not supported by this browser.";   } 
} 
async function showPosition(position) { 
const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude }&longitude=${position.coords.longitude}&hourly=relativehumidity_2m,weathercode,temperature_180m,soil_temperature_54cm,soil_moisture_27_81cm&daily=weathercode,temperature_2m_max,temperature_2m_min&windspeed_unit=mph&timeformat=unixtime&timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`); 
const data = await res.json(); 
  temp.innerHTML=`${Math.round(data.daily.temperature_2m_max[0])} <span class="symbol">&deg;</span>C`;  
  dtemp.forEach((a,i)=>{
    a.innerHTML=`${Math.round(data.daily.temperature_2m_max[i])}&deg;`;
  })
}getLocation();

