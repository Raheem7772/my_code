let container=document.getElementById("greetingContainer");
container.style.backgroundImage='url("https://res.cloudinary.com/dsm5qqqrm/image/upload/v1690358944/photo-1577046848358-4623c0859b8a_hxwlhu.jpg")';
container.style.height='100vh';
container.style.width='120vh';
container.style.backgroundRepeat='no-repeat';

let greeting='{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you."}';
let greeting1={
                from:"Rahul",
                to:"Varakumar"};

let parsedObject=JSON.parse(greeting);
let greetingf=JSON.stringify(greeting1);

//diplay
let textContainer=document.createElement('div');
textContainer.classList.add('text');

let textElement=document.createElement('p');
textElement.innerHTML=parsedObject.greetText;
textElement.style.color='white';
textElement.classList.add('textstyle');
textContainer.appendChild(textElement);

container.appendChild(textContainer);

let textContainer1=document.createElement('div');
textContainer1.classList.add('text1');

let textElement1=document.createElement('p');
textElement1.innerHTML=greetingf;

textElement1.style.color='white';
textElement1.classList.add('textstyle1');
textContainer1.appendChild(textElement1);

container.appendChild(textContainer1);
