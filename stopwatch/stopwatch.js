const timer = document.getElementById('time');

let min = 0;
let sec = 0;
let milliesecond;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    milliesecond = parseInt(milliesecond);
    sec = parseInt(sec);
    min = parseInt(min);

    milliesecond = milliesecond + 1;

    if (milliesecond == 60) {
        milliesecond = 0;
        sec++;     
    }

    if (sec == 60) {
      sec = 0;
      min ++;
    }

    if (min == 60) {
        min++;
      }


      //Hier komt er op de display een 0 bij als de klok begint te lopen.
    if (milliesecond < 10 || milliesecond == 0) {
      milliesecond = '0' + milliesecond;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + milliesecond;

    setTimeout("timerCycle()", 10);
  }
}

//Hiermee gaat de klok weer helemaal naar nul.
function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    min = 0;
    milliesecond = 0;
    sec = 0;
}

//Dit is de pause knop.
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}


