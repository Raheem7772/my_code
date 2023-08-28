let bikes= ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person= {
    name:"Rahul",
    age:25,
    gender:"Male",
};
let todos= [{
        todo:"Attending  sessions",
        todoStatus:"Completed",
    },
    {
        todo:"Completing practice sets",
        todoStatus:"Not Completed",
    },
    {
        todo:"Asking doubts",
        todoStatus:"Completed",
    },
];
//let valuesToStringfiy=JSON.stringify([bikes, person, todos]);
let valuesToStringfiy1=JSON.stringify(bikes);
let valuesToStringfiy2=JSON.stringify(person);
let valuesToStringfiy3=JSON.stringify(todos);



let displayContainer=document.getElementById('jsonContainer');
displayContainer.innerHTML='';

//bike container
let bikeContainer = document.createElement('div');
bikeContainer.className = 'bike';
bikeContainer.style.backgroundColor='rgb(243, 243, 243)';
   let bikeElement = document.createElement('p');
   bikeElement.textContent = valuesToStringfiy1;
bikeContainer.appendChild(bikeElement);

//person container
let personContainer = document.createElement('div');
personContainer.className = 'person';
personContainer.style.backgroundColor='rgb(243, 243, 243)';
   let personElement = document.createElement('p');
   personElement.textContent = valuesToStringfiy2;
personContainer.appendChild(personElement);
//todo container
let todoContainer = document.createElement('div');
todoContainer.className = 'todo';
todoContainer.style.backgroundColor='rgb(243, 243, 243)';
   let todoElement = document.createElement('p');
   todoElement.textContent = valuesToStringfiy3;
todoContainer.appendChild(todoElement);




//display
displayContainer.appendChild(bikeContainer);
displayContainer.appendChild(personContainer);
displayContainer.appendChild(todoContainer);



//displayContainer.textContent=valuesToStringfiy1;
//displayContainer.textContent=valuesToStringfiy;
//displayContainer.textContent=valuesToStringfiy;

