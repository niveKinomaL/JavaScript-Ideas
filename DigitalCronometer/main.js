const clockTime = document.querySelector('#clock-time');
const h = document.querySelector('#hoursC');
const m = document.querySelector('#minutesC');
const s = document.querySelector('#secondsC');
const btn = document.querySelector('#btn')
const label_cr = document.querySelector('#label-cr')
clockTime.textContent = `${h.value}h ${m.value}m ${s.value}s`;

function updateClock(){
  h.addEventListener('change', () =>{
    if (h.value < 1000){
      clockTime.textContent = `${h.value}h ${m.value}m ${s.value}s`;
    }else{
      h.value = 0;
      label_cr.textContent = "Not more than 999!";
      label_cr.style.color = "red";
      setTimeout(() => {
        label_cr.textContent = "Digital Time";
        label_cr.style.color = "white";
      }, 2000);
    }
  })
  m.addEventListener('change', () =>{
    if (m.value < 1000){
      clockTime.textContent = `${h.value}h ${m.value}m ${s.value}s`;
    }else{
      m.value = 0;
      label_cr.textContent = "Not more than 999!";
      label_cr.style.color = "red";
      setTimeout(() => {
        label_cr.textContent = "Digital Time";
        label_cr.style.color = "white";
      }, 2000);
    }
  })
  s.addEventListener('change', () =>{
    if (s.value < 1000){
      clockTime.textContent = `${h.value}h ${m.value}m ${s.value}s`;
    }else{
      s.value = 0;
      label_cr.textContent = "Not more than 999!";
      label_cr.style.color = "red";
      setTimeout(() => {
        label_cr.textContent = "Digital Time";
        label_cr.style.color = "white";
      }, 2000);
    }
  })

  btn.addEventListener('click', () =>{
    if(h.value == 0 && m.value == 0 && s.value == 0){
      setTimeout(() => {
        clockTime.textContent = `${h.value}h ${m.value}m ${s.value}s`;
      }, 1000);
      return clockTime.textContent = "You need to choose some hour!";
    }else{
      function startTimer(hours, minutes, seconds) {
      let durationInSeconds = (hours * 3600) + (minutes * 60) + seconds;
      let timer = durationInSeconds;

      let intervalId = setInterval(() => {
        let hoursLeft = parseInt(timer / 3600, 10);
        let minutesLeft = parseInt((timer % 3600) / 60, 10);
        let secondsLeft = parseInt(timer % 60, 10);

        hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
        minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
        secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

        console.clear();
        clockTime.textContent = `${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

        if (--timer < 0) {
          clearInterval(intervalId);
          label_cr.textContent = "Timer has ended.";
        }
      }, 1000);

      return intervalId;
    }

    function stopTimer(intervalId) {
      clearInterval(intervalId);
    }

    // Example usage
    const hours = h.value / 10; // Set hours
    const minutes = m.value / 10; // Set minutes
    const seconds = s.value; // Set seconds
    const durationInSeconds = (hours * 3600) + (minutes * 60) + seconds; // Calculate total duration in seconds

    const intervalId = startTimer(hours, minutes, seconds); // Start timer

    setTimeout(() => {
      stopTimer(intervalId); // Stop timer after 5 seconds
    }, durationInSeconds * 1000);   
    }
  })
}

updateClock();
setInterval(updateClock, 1000);