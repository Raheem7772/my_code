let userInputE1=document.getElementById("userInput");
let requestBodyE1=document.getElementById("requestBody");
let sendPutRequestBtnE1=document.getElementById("sendPutRequestBtn");
let requestStatusE1=document.getElementById("requestStatus");
let httpResponseE1=document.getElementById("httpResponse");

function sendPutHTTPRequest(){
 let userId=userInputE1.value;
 let url="https://gorest.co.in/public-api/users/"+ userId;
 let requestBody=requestBodyE1.value;

 let options={
    method:"PUT",
        headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d"
    },
    body:requestBody
};
 
fetch(url,options)
.then(function(response){
    return response.json();
   
})
.then(function(jsonData){

    let requestStatus=jsonData.code;
    let httpResponse=JSON.stringify(jsonData);
    requestStatusE1.textContent=requestStatus;
    httpResponseE1.textContent=httpResponse;
})
}
sendPutRequestBtnE1.addEventListener("click",sendPutHTTPRequest);




