CREATE TABLE exam_schedule(
name varchar(100),
course varchar(100),
exam_date_time DATETIME,
duration_in_sec INT,
pass_per float);

PRAGMA TABLE_INFO(exam_schedule);

INSERT into exam_schedule(name,course,exam_date_time,duration_in_sec,pass_per)
VALUES ('Sadik','Group-2','2023-10-20 10:00:00',6000,60.5);
select * from exam_schedule;