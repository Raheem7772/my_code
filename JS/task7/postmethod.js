let requestBodyE1=document.getElementById("requestBody");
let sendPostRequestBtnE1=document.getElementById("sendPostRequestBtn");
let requestStatusE1=document.getElementById("requestStatus");
let httpResponseE1=document.getElementById("httpResponse");

function sendPostHTTPRequest(){
    let url="https://gorest.co.in/public-api/users";
    let requestBody=requestBodyE1.value;
    let options={
        method:"POST",
        headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d"
    },
    body:requestBody
};
//requestStatusE1.classList.add("d-none");

fetch(url,options)
.then(function(response){
    
    
    return response.json();
   
})
.then(function(jsonData){
    //requestStatusE1.classList.remove("d-none");

    ///let httpResponse=JSON.stringify(jsonData);
    
    requestStatusE1.textContent=jsonData.code;
    httpResponseE1.textContent=JSON.stringify(jsonData.data);
})
}
sendPostRequestBtnE1.addEventListener("click",sendPostHTTPRequest);
