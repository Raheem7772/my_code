let jokeBtnE1=document.getElementById("jokeBtn");
let jokeTextE1=document.getElementById("jokeText");

function jokeBtntext(){
    let url="https://apis.ccbp.in/jokes/random";
   

    let options= {
        method:"GET"
      };
      
      fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
       
        let jokeText=JSON.stringify(jsonData);
        jokeTextE1.textContent=jokeText;
      });
    
      
}
jokeBtnE1.addEventListener("click",jokeBtntext);