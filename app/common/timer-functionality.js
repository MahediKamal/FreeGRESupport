var fullTime = 30*60;
var currentRemainingTime = fullTime;
var isTimePlaying = false;

var increaseSecondId = null;

function timerPlayPause() {
    if(isTimePlaying) {
        pauseTimer();
    } else {
        playTimer();
    }
}

function timerEdit() {
    var time = window.prompt("Time (min)", Math.floor(fullTime/60));
    
    if(time) {
        fullTime = time*60;
        timerReset();
    }
}

function timerReset() {
    pauseTimer();
    currentRemainingTime = fullTime;
    showTime();
}

function pauseTimer() {
    if (increaseSecondId) clearInterval(increaseSecondId);
    isTimePlaying = false;
    $(".timer-play-pause").text("play_circle_outline");
}

function playTimer() {
    showTime();
    increaseSecondId = setInterval(increaseSecond, 1000);
    isTimePlaying = true;
    $(".timer-play-pause").text("pause_circle_outline");
}

function increaseSecond() {
    if(currentRemainingTime > 0) {
        currentRemainingTime --;
        showTime();
        
    } 
    
    if (currentRemainingTime == 0) {
        pauseTimer();
        //alert("Time is up!");
    }
}

function showTime() {
    var min = Math.floor(currentRemainingTime/60);
    var M1 = min%10;
    var M2 = Math.floor(min/10);
    var sec = currentRemainingTime%60;
    var S1 = sec%10;
    var S2 = Math.floor(sec/10);
    $(".timer-display").text(""+M2+M1 + ":" + S2+S1);
}