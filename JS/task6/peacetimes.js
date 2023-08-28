let twentySecondsBtnE1=document.getElementById("twentySecondsBtn");
let thirtySecondsBtnE1=document.getElementById("thirtySecondsBtn");
let fortySecondsBtn=document.getElementById("fortySecondsBtn");
let oneMinuteBtnE1=document.getElementById("oneMinuteBtn");
let display=document.getElementById("timerText");
function twentySec(){
    let countDown=20;
    let intervalId=setInterval(function(){
        countDown=countDown-1;
         if(countDown===0){
            clearInterval(intervalId);
            }
    },1000);
}