let timerE1=document.getElementById("timer");
let defuserE1=document.getElementById("defuser");

let countDown=10;

let intervalId=setInterval(function(){
    countDown=countDown-1
    timerE1.textContent=countDown;
    if(countDown===0){
        timerE1.textContent="BOOM";
        clearInterval(intervalId);
    }
},1000);

defuserE1.addEventListener("keydown",function(event){
    let bombDefuserText=defuserE1.value;
    if(event.key==="Enter" && bombDefuserText==="defuse" && countDown!==0){
        timerE1.textContent="You did it!.."
        clearInterval(intervalId);
    }
});

