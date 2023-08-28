//includes()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML=fruits.includes(8);
let number=[1,2,3,4];

//document.getElementById("demo").innerHTML=number.includes(5);

//indexof()
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let index=fruits1.indexOf("7");
document.getElementById("indexof").innerHTML=index;
//document.getElementById("indexof").innerHTML=number.indexOf(5);

//find()
let arr=[23,4.5,'Asia',7,'Europe'];
 let found=document.getElementById("findArray");
 found.innerHTML=arr.find(function(element){
    
    if( element==='Asia'){
        return true;
    }
    else {
        return false;
    }

});

