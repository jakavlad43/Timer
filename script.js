window.addEventListener('DOMContentLoaded', function(){

  let deadline = '2020-04-02 18:45:00 GMT+0300';

  function getTimeRemaining(endtime){
      let t = Date.parse(deadline) - Date.parse(new Date()),
          seconds = Math.floor((t/1000) % 60),
          minutes = Math.floor((t/1000/60) % 60),
          hours = Math.floor((t/(1000*60*60)));
          // hours = Math.floor((t/1000/60/60) % 24),
          // days = Math.floor((t/(1000*60*60*24)));


          if (hours < 10) {hours = "0" + hours;}
          if (minutes < 10) {minutes = "0" + minutes;}
          if (seconds < 10) {seconds  =  "0" + seconds;}
          if (hours < 0) {hours = "00";}

      return{
          'total' : t,
          'hours' : hours,
          'minutes' : minutes,
          'seconds' : seconds
      };

  }


  function setClock(id, endtime){
      let timer = document.getElementById(id),
          hours = timer.querySelector('.hours'),
          minutes = timer.querySelector('.minutes'),
          seconds = timer.querySelector('.seconds'),
          timeInterval = setInterval(updateClock, 1000);


      function updateClock(){
          let t = getTimeRemaining(endtime);
          hours.textContent = t.hours;
          minutes.textContent = t.minutes;
          seconds.textContent = t.seconds;

          if (t.total <= 0) {
              document.getElementById("clock").className = "hide";
              document.getElementById("clock-end").className = "show";
              return true;
            }
      }

  }

  setClock('timer', deadline);
});
