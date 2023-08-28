let h1Element=document.createElement("h1")
h1Element.textContent="welcome to the World Baby";

let containerElement=document.getElementById("myContainer");
containerElement.appendChild(h1Element);

let btnElement=document.createElement("button");
btnElement.textContent="Change Heading";
containerElement.appendChild(btnElement);