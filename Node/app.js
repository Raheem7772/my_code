// const express=require("express");
// const app=express();



//get request

// app.get("/",(req,res)=>{
//     res.send("Hello World!");
// });

// app.get("/date",(req,res)=>{
//     let date=new Date();
//     res.send(`Today's date is: ${date}`);
// });
// app.get("/page",(req,res)=>{
//     res.sendFile("./notes.html",{root:__dirname })
// });




// //assigning port number
// app.listen(3000,()=>{
//     console.log("Server starting port number is 3000");
// })

//SQLite Database Initialization

const express=require("express");
const path=require("path");

const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const app=express();

app.use(express.json());

const dbPath=path.join(__dirname,"app.db");

let db=null;

const initializeDBAndServer=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database,
        });
        app.listen(3000,()=>{
            console.log("Server Running at http://localhost:3000/");
        });
    }catch(e){
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();

//get method
app.get("/details", async (req, res) => {
    const getBooksQuery=`SELECT * FROM company;`;
    const booksArray=await db.all(getBooksQuery);
    res.send(booksArray);
  });
  
  app.get("/",(req,res)=>{
    res.send("Hello World!!");
    res.end();
  })


  //get required row in table
  app.get("/details/:id/",async (req,res)=>{
    const {id}=req.params;
    const getCompanyQuery=`SELECT * FROM company WHERE ID=${id};`;
    const comanyId=await db.get(getCompanyQuery);
    res.send(comanyId);
  })

  //post method
  app.post("/addemp/",async(req,res)=>{
    const empDetails=req.body;
    const {
        ID,NAME,AGE,ADDRESS,SALARY}=empDetails;
    const empDetailsQuery=`INSERT INTO company (ID,NAME,AGE,ADDRESS,SALARY)
    VALUES
    (
        ${ID},
        '${NAME}',
        ${AGE},
        '${ADDRESS}',
        ${SALARY});`;
    const dbResponse=await db.run(empDetailsQuery);
    const id=dbResponse.lastID;
    //console.log(id);
    res.send(id)
  });

  //Put method
app.put("/details/:id/",async(req,res)=>{
    const {id}=req.params;
    const empDetails=req.body;
    const {AGE,ADDRESS,SALARY}=empDetails;
    const updateQuery=`UPDATE company SET
    AGE=${AGE},
    ADDRESS='${ADDRESS}',
    SALARY=${SALARY} WHERE ID=${id};`;
    await db.run(updateQuery);
    res.send({message:`Employee details updated sucessfully with ID:${id}`});
})

//delete method
app.delete("/delete/:id",async(req,res)=>{
    let {id}=req.params;
    const deleteQuery=`DELETE FROM company WHERE ID=${id};`;
    await db.run(deleteQuery);
    res.send({meaasge:`Delete Employee details sucessfully with ID=${id}`});

})