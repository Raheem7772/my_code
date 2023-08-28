let userInputE1=document.getElementById("userInput");
let sendDeleteRequestBtnE1=document.getElementById("sendDeleteRequestBtn");
let requestStatusE1=document.getElementById("requestStatus");
let httpResponseE1=document.getElementById("httpResponses");

function sendDeleteHTTPRequest(){
    let userId=userInputE1.value;
    let url="https://gorest.co.in/public-api/users/"+userId;

    let options={
        method:"DELETE",
            headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d"
        }
    };

 fetch(url,options)
    .then(function(response){
    return response.json();
   
})
.then(function(jsonData){

    let requestStatus=jsonData.code;
    let httpResponse=JSON.stringify(jsonData.data);
    requestStatusE1.textContent=requestStatus;
    httpResponseE1.textContent=httpResponse;
})

}
sendDeleteRequestBtnE1.addEventListener("click",sendDeleteHTTPRequest);


