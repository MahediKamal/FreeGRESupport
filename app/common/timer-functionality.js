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

}

function timerReset() {
    pauseTimer();
    currentRemainingTime = fullTime;
    showTime();
}

function pauseTimer() {
    if (increaseSecondId) clearInterval(increaseSecondId);
    isTimePlaying = false;
    $(".timer-play-pause").text("||");
}

function playTimer() {
    showTime();
    increaseSecondId = setInterval(increaseSecond, 1000);
    isTimePlaying = true;
    $(".timer-play-pause").text(">");
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
    var min=Math.floor(currentRemainingTime/60);
    var M1=0+min%10;
    var M2=0+Math.floor(min/10);
    var sec=0+currentRemainingTime%60;
    var S2=0+sec%10;
    var S1=Math.floor(sec/10);
    $(".timer-display").text( " "+M2+M1+":"+S1+S2);
}