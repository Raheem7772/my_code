// const add=require('./index');

// console.log(add(30,20));

// const {add,sub}=require('./index');
// console.log(add(30,2));
// console.log(sub(11,9));

// const path=require("path");
// const filePath=path.join("users","lenovo","Desktop","Ass_done","Node","notes.txt");
// console.log(filePath);


//add days

const addDays=require("date-fns/addDays");
const result=addDays(new Date(2023, 7, 24), 10);

console.log(result);
