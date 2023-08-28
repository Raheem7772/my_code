let counterNum=document.getElementById("counternum");
let counter=0;
let uniqueId=setInterval(function(){
    counterNum.textContent=counter;
    counter=counter+1;
 },1000);

let cleatBtn=document.getElementById("clearBtn");
clearBtn.onclick=function(){
    clearInterval(uniqueId);
    counterNum.textContent=null;
};