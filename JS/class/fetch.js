///POST Method
// let data={
//     name:"Raheem",
//     gender:"Male",
//     email:"Raheem@gmail.com",
//     status:"Active"
// };
// let options={
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         Authorization:"Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d"
//     },
//     body:JSON.stringify(data)
// };
// fetch("https://gorest.co.in/public/v2/users", options)
// .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonData) {
//     console.log(jsonData);
//   });

//PUT
// let data= {
//   name:"Raheem Shaik"
// };

// let options= {
//   method:"PUT",
//   headers: {
//     "Content-Type":"application/json",
//     Accept:"application/json",
//     Authorization:"Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d"
//   },
//   body:JSON.stringify(data)
// };

// fetch("https://gorest.co.in/public/v2/users/4126544", options)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonData) {
//     console.log(jsonData);
//   });

//DELETE
// let options= {
//   method:"DELETE",
//   headers: {
//     "Content-Type":"application/json",
//     Accept:"application/json",
//     Authorization:"Bearer 94aeb36ba46864733562e6ad5fe095ea6b8641730eb681827df1569611fde29d"
//   }
// };

// fetch("https://gorest.co.in/public/v2/users/4126544", options)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(jsonData) {
//     console.log(jsonData);
//   });


// // script.js
// document.addEventListener("DOMContentLoaded", () => {
//     const fetchDataButton = document.getElementById("fetchDataButton");
//     const dataContainer = document.getElementById("dataContainer");
  
//     fetchDataButton.addEventListener("click", () => {
//       fetchData();
//     });
  
//     async function fetchData() {
//       try {
//         const response = await fetch("https://gorest.co.in/public/v2/users");
//         const data = await response.json();
//         displayData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }
  
//     function displayData(data) {
//       dataContainer.innerHTML = ""; // Clear previous data
//       data.forEach((item) => {
//         const postElement = document.createElement("div");
//         postElement.innerHTML = `<h3>${item.name}</h3><p>${item.email}</p><p>${item.gender}</p>`;
//         dataContainer.appendChild(postElement);
//       });
//     }
//   });
  


//Spread Oprator
//  let arr1=[2,3];
//  let arr2=[...arr1];
//  console.log(arr2);

//Spread Operator with Objects
// let person={name:"Raheem",age:28};
// let details={...person,city:"guntur"};
// console.log(details);

//Spread operator with function calls
// function add(a,b,c){
//   return a+b+c;
// }
// let number=[10,20,3,4,5];
// console.log(add(...number));

//Rest Parameter
// function number(...args){
//   console.log(args);
// }
// number(1,2,3)

//Destructuring arrays and objects with Rest Parameter Syntax
//1. Arrays
// let[a,b,...rest]=[1,2,3,4,5];
// console.log(a);
// console.log(b);
// console.log(rest);

//2.objects
// let {firstName,...rest}={firstName:"Raheem",
// lastName:"shaik",
// age:28};
// console.log(firstName);
// console.log(rest);

//Functions- Default Parameters
// function number(a=2,b=4){
//   console.log(a)
//   console.log(b)
// }
// number();


//Template Literals
// let firstName="Raheem";
// console.log(`Hello ${firstName}!`);

//Arrow Functions

// let sum=(a,b)=>{
//   let result=a+b;
//   return result;
// }
// console.log(sum(4,2));
//1.simple expression
// let sum=(a,b)=>a+b;
// console.log(sum(8,9));

//2.one parameter
// let greet=name=>`Hi ${name}!`;
// console.log(greet("Raheem"));

//3.no parameter
// let greet=()=>"Hello!";
// console.log(greet());

//4.Returning Objects
let createUser=name=>{
  return{
    firstName:name
  };
};
console.log(createUser("Raheem"));
//4.1 simple expression
let createUser1=name=>({firstName:"Sameera"});
console.log(createUser1());
