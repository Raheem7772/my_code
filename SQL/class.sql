CREATE TABLE player (
  name VARCHAR(200),
  age INTEGER,
  score INTEGER
);

CREATE TABLE student1(
name VARCHAR(100),
age INTEGER,
sid INTEGER
);


SELECT * FROM student1;
PRAGMA TABLE_INFO(student1)

INSERT INTO student1(name,age,sid)
VALUES('hari',22,3);
drop table student1;
PRAGMA TABLE_INFO(student1);
INSERT INTO
  player (name, age, score)
VALUES
  ('Rakesh', 39, 35),
  ('Sai', 47, 30);

