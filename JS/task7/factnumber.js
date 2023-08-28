let userInputE1=document.getElementById("userInput");
let factE1=document.getElementById("fact");
//let spinnerEl=document.getElementById("spinner");

function userInputNumber(event){
    if (event.key==="Enter") {
    let userInput=userInputE1.value;
    let url="https://apis.ccbp.in/numbers-fact?number="+userInput;
    let options= {
        method:"GET"
      };
  
      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
            let fact=JSON.stringify(jsonData);
            factE1.textContent=fact;
          });
}
}
userInputE1.addEventListener("keydown",userInputNumber);