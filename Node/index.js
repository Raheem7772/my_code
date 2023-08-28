// const greeting=(name)=>{
//     console.log(`Hello ${name}`);
// };

// greeting("Rashiqa");
// greeting("Shaik");


//default exports
// const add=(a,b)=>{
//     return a+b;
// };
// module.exports=add;


//named exports
// const add=(a,b)=>{
//     return a+b;
// };
// const sub=(a,b)=>{
//     return a-b;
// };

// exports.add=add;
// exports.sub=sub;

//create a server

// const http=require('http');
// //create a server object:
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     //res.write('Hello Rashiqa');
//     //res.write('Welcome to the World!'); //write a response to the client
//     res.write(req.url);//url that comes after the domain name
//     res.end(); //end the response
//   }).listen(7773); 

const http=require('http');
const url=require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    const q=url.parse(req.url,true).query;
    const txt=q.year+" "+q.month;
    res.end(txt);
}).listen(7772);