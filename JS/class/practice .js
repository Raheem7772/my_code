/*
let textAreaElement=document.getElementById("message");
let saveButton=document.getElementById("saveButton");
let clearButton=document.getElementById("clearButton");

saveButton.onclick=function(){
    let userEnteredText=textAreaElement.value;
    localStorage.setItem("userEnteredText",userEnteredText);
    
};

let storedUserInputValue=localStorage.getItem("userEnteredText");

if(storedUserInputValue===""){
    textAreaElement.value="";
}
else{
    textAreaElement.value=storedUserInputValue;
}


clearButton.onclick=function(){
  let remove1=localStorage.removeItem("userEnteredText");
  document.getElementById("message").value = "";
};
*/
/*
let profile={
    name:"Rahul",
    age:29,
    designation:"web technologies"
};
let stringfieldProfile=JSON.stringify(profile);
//console.log(stringfieldProfile);
  
//  console.log(typeof(stringfieldProfile));

const jsonString = '{"name": "John", "age": 30, "isStudent": true}';
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);

//const invalidJsonString = '{"name": "John", "age": 30, "isStudent": true}';
//const parsedObject1 = JSON.parse(invalidJsonString); // Throws an error


//console.log(parsedObject1);*/


//splice()
//let myArray= [5, "six", 2, 8.2];
//myArray.splice(2, 2);

//onsole.log(myArray);  
//let deletedItems=myArray.splice(2, 2);

//console.log(deletedItems); 

//myArray.splice(2,0,false,"one",);
//console.log(myArray);
//myArray.splice(2,1,true);
//console.log(myArray);

//find Index()
/*
let myArray= [5, 12, 8, 130, 44];
let itemIndex=myArray.findIndex(function(eachItem) {
  if(eachItem===130){
    return true;
  }
  else{
    return false;
  }
});
console.log(itemIndex);
*/
//includes()
/*
let arr= ["Wind", "Water", "Fire"];
let combinedString=arr.join("-");
console.log(combinedString);
*/

//POSTMethod
let data={
  name:"Raheem",
  gender:"Male",
  email:"raheem@gnail.com",
  status:"Active"
};
let options={
  method:"POST",
  headers:{
    "content-Type":"application/json",
    Accept:"application/json",
    Authorization:"0da3669bbf49c1ee9f9bcc1882b5afbb0f9cc9ff5673756f742313f85f2d86b6"
  },
  body:JSON.stringify(data)
};
fetch("https://gorest.co.in/public/v2/users",options)
.then(function(response){
  return response.json();
})
.then(function(jsonData){
  console.log(jsonData);
})





