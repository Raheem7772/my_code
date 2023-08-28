let fromUserInput1=document.getElementById("fromUserInput");
let toUserInput1=document.getElementById("toUserInput");



function startBtn(){
    //if(curentCount===""){alert("enter start number");};
    let curentCount=parseInt(fromUserInput1.value);
let endvalue=parseInt(toUserInput1.value);
    

    let intervalId=setInterval(()=>{
        
        if(curentCount===endvalue){
            clearInterval(intervalId);
        }else{
            curentCount=curentCount+1;
            document.getElementById("counterText").textContent=curentCount;
        }
    },1000);
    
}
