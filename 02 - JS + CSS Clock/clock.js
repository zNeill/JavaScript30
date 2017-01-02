  const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const ahora = new Date();
  const secs = ahora.getSeconds();
  const mins = ahora.getMinutes();
  const hour = ahora.getHours();
  const secDegs = (((secs/60)*360)  + 90);
  const minDegs = (((mins/60)*360)  + 90);
  const hourDegs = (((hour % 12)/12)*360 + 90) + (((mins/60)/12)*360);
  hourHand.style.transform = `rotate(${hourDegs}deg)`; 
  minsHand.style.transform = `rotate(${minDegs}deg)`;
  secondHand.style.transform = `rotate(${secDegs}deg)`; 
}

setInterval(setTime,1000);

