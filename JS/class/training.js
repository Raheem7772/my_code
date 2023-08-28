//1. Callback functions
/*//1.1 passing a f/n as an argument
function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Goood Morning");
}
displayGreeting(function(){
    console.log("Raheem");
});*/

/*//1.2 Passing a function name as an argument
function displayGreeting(display){
    console.log("Hi");
    display();
    console.log("How are You");
}
function displayRaheem(){
    console.log("Raheem");
}
displayGreeting(displayRaheem);*/

/*//1.3 Passing a function expression as an argument
function displayGreeting(displayName){
    console.log("Hello");
    displayName();
    console.log("Good Evening");
}
let displayRaheem=function(){
    console.log("Raheem");
}
displayGreeting(displayRaheem);*/

//2. Schedulers
/*//2.1 setInterval()
 let counter=0;
 setInterval(function(){
    console.log(counter);
    counter=counter+1;
 },1000);*/

 //2.2 clearInterval()
 /*let counter=0;
  let uniqueId=setInterval(function(){
    console.log(counter);
    counter=counter+1;
 },1000);
 clearInterval(uniqueId);*/
//example of set and clear interval

/*let displayCounter=document.getElementById("display");
let setIntervalBtnE1=document.getElementById("setIntervalBtn");
let clearIntervalBtnE1=document.getElementById("clearIntervalBtn");

let uniqueId=null;
setIntervalBtnE1.onclick=function(){
    let counter=0;
    uniqueId=setInterval(function(){
        displayCounter.textContent=counter;
        counter=counter+1;
    },1000);
   
};
clearIntervalBtnE1.onclick=function(){
    clearInterval(uniqueId);
    displayCounter.textContent="Interval cleared";
};*/

//2.3 setTimeout()
/*let counter=0;
 setTimeout(function(){
    console.log(counter);
    counter=counter+1;
 },1000);*/
 //2.4 clearTimeout()
 /*let counter=0;
 let uniqueId=setTimeout(function() {
   console.log(counter);
   counter=counter+1;
 }, 1000);
 
 clearTimeout(uniqueId);*/
 //example of set and clear Timeout
 /*let setTimeoutBtnE1=document.getElementById("setTimeoutBtn");
 let uniqueId=null;
 setTimeoutBtnE1.onclick=function(){
    setTimeout(function(){
        console.log("hello");
    },3000);
 };*/
 //1. Event Listeners
 //1.1 Inline event listeners
/* function greeting(){
    console.log("Hello");
 };
 //1.2 onevent listeners
 let greetBtn1=document.getElementById("greetBtn");
 greetBtn1.onclick=function(){
    console.log("Raheem");
 };*/
 //1.3 addEventListener()-Syntax:element.addEventListener(event, function);
/*
let greetBtn=document.getElementById("greetBtn");

greetBtn.addEventListener("click", function() {
  console.log("Hi Raheem");
});*/
//2. Operators

//3.1 Keyboard Events
/*
let inputEl=document.createElement("input");

function printKeydown() {
  console.log("key pressed");
}

inputEl.addEventListener("keydown", printKeydown);
document.body.appendChild(inputEl);*/

//3.2 Event Object
//event.type
/*
let inputEl=document.createElement("input");

function printKeydown(event) {
  console.log(event.type);
}
inputEl.addEventListener("keydown", printKeydown);
document.body.appendChild(inputEl);*/

//event.type
/*let inputElement=document.createElement("input");

function printKeydown(event) {
  console.log(event.target);  // <input></input>
}

inputElement.addEventListener("keydown", printKeydown);
document.body.appendChild(inputElement);*/

//event.key
/*let inputElement=document.createElement("input");

function printKeydown(event) {
  console.log(event.key);
}

inputElement.addEventListener("keydown", printKeydown);
document.body.appendChild(inputElement);
*/
// Get the elements we need
let backgroundElement = document.getElementById('backgroundElement');
let changeButton = document.getElementById('changeButton');

// Function to change the background image
function changeBackgroundImage() {
  // Replace the URL below with the path to your desired image
  let imageUrl ="https://res.cloudinary.com/dsm5qqqrm/image/upload/v1690358944/photo-1577046848358-4623c0859b8a_hxwlhu.jpg";
  backgroundElement.style.backgroundImage = `url(${imageUrl})`;
}

// Add the event listener to trigger the function on button click
changeButton.addEventListener('click', changeBackgroundImage);