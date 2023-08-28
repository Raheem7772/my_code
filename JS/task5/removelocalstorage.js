let textAreaElement=document.getElementById("message");
let saveButton=document.getElementById("saveButton");
let clearButton=document.getElementById("clearButton");

saveButton.onclick=function(){
    let userEnteredText=textAreaElement.value;
    localStorage.setItem("userEnteredText",userEnteredText);
    
};

clearButton.onclick=function(){
  let remove1=localStorage.removeItem("userEnteredText");
  document.getElementById("message").value = "";
};