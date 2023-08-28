let convertBtnE1=document.getElementById("convertBtn");
let errMsgEl=document.getElementById("errMsg");
	//write your code here
    let hoursInputE1=document.getElementById("hoursInput"); 
    convertBtnE1.addEventListener("click",function (){
        
    
        //let hoursInputE1=parseInt(document.getElementById("hoursInput").value);
        hoursInputE1=parseInt(hoursInput.value);
        let minutesInputE1=parseInt(document.getElementById("minutesInput").value);
        let seconds=(hoursInputE1 * 3600)+(minutesInputE1 * 60);

        
   
        let errMsgE1=document.getElementById("errorMsg");
                
        let showSeconds=document.getElementById("timeInSeconds");
        showSeconds.textContent=seconds;
    
        
    })   
        
   
    
