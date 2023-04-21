

function updateClock(){
  const clockTime = document.querySelector('#clock-time');

  const clock = new Date();
  const h = clock.getHours();
  const m = clock.getMinutes();
  const s = clock.getSeconds();

  const clockReal = `${h}h ${m}m ${s}s`;

  clockTime.textContent = clockReal;
}

updateClock();

setInterval(updateClock, 1000);