CREATE TABLE cricket_team(
player_id	INTEGER,
player_name	TEXT,
jersey_number	INTEGER,
role	TEXT);

PRAGMA TABLE_INFO(cricket_team);

INSERT INTO cricket_team(player_id,player_name,jersey_number,role)
VALUES (1,'Kohli',9,'Batter'),
(2,'Ravindra',10,'All-Rounder'),
(3,'Kuldeep',7,'Bowler'),
(4,'Rohit',5,'Batter'),
(5,'Bumrah',2,'Bowler');

SELECT * FROM cricket_team;