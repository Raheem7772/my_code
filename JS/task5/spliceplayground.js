let indexInput=document.getElementById("startIndexInput");
let deleteCount=document.getElementById("deleteCountInput");
let itemToAdd=document.getElementById("itemToAddInput");
let array=[10,'ajay',30,40,50];

function spliceButton(){
   let indexInputValue=parseInt(indexInput.value);
   let deleteCountValue=parseInt(deleteCount.value);
   let itemToAddvalue=itemToAdd.value;
   array.splice(indexInputValue,deleteCountValue,itemToAddvalue);
   document.getElementById("display").textContent=array;
}
