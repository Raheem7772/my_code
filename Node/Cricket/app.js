//SQLite Database Initialization

const express=require("express");
const path=require("path");

const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const app=express();

app.use(express.json());

const dbPath=path.join(__dirname,"crecketTeam.db");

let db=null;

const initializeDBAndServer=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database,
        });
        app.listen(8000,()=>{
            console.log("Server Running at http://localhost:8000/");
        });
    }catch(e){
        console.log(`DB Error: ${e.message}`);
        process.exit(1);
    }
};

initializeDBAndServer();

//1.GET all players

app.get("/players/",async(req,res)=>{
    const getPalyersQuery=`SELECT * FROM cricket_team;`;
    const getPalyers=await db.all(getPalyersQuery);
    res.send(getPalyers);
})

//2.ADD player
app.post("/addplayer/",async(req,res)=>{
    const playerDetails=req.body;
    const {playerId,playerName,jerseyNumber,role}=playerDetails;
    const addPlayerQuery=`INSERT INTO cricket_team (player_id,player_name,jersey_number,role)
    VALUES
    (
        ${playerId},
        '${playerName}',
        ${jerseyNumber},
        '${role}');`;
    const dbResponse=await db.run(addPlayerQuery);
    const playersId=dbResponse.lastID;
    res.send({meaasge:`Player detail added sucefully with id:${playersId}`})
  });

  //3.Update player

app.put("/players/:playerId/",async(req,res)=>{
    let {playerId}=req.params;
    const playerDetails=req.body;
    const{jerseyNumber,role}=playerDetails;
    const updatePlayerQuery=`UPDATE cricket_team SET
    jersey_Number=${jerseyNumber},
    role='${role}';`;
    await db.run(updatePlayerQuery);
    res.send({message:`updated player details with id:${playerId}`});
});

//4.Delete player
app.delete("/players/:playerId/",async(req,res)=>{
    let {playerId}=req.params;
    const deletePlayerQuery=`DELETE FROM cricket_team WHERE
    player_Id=${playerId};`;
    await db.run(deletePlayerQuery);
    res.send({message:`player details deleted with id:${playerId}`});
});

//5.Get palyer details
app.get("/players/:playerId/",async(req,res)=>{
    let {playerId}=req.params;
    const getPlayerDetailsQuery=`SELECT * FROM cricket_team WHERE
    player_Id=${playerId};`;
    const playerDetails=await db.get(getPlayerDetailsQuery);
    res.send(playerDetails);
});

// "workbench.editorAssociations": {
//     "*.html": "default"
// },
// "grunt.autoDetect": "on",
// "gulp.autoDetect": "on",
// "jake.autoDetect": "on",
// "json.schemas": [
    

// ]