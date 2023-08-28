CREATE TABLE student(
name VARCHAR(100),
date_of_birth DATE,
address TEXT);

select * from student;
PRAGMA TABLE_INFO(student);

INSERT INTO student(name,date_of_birth,address,pincode)
VALUES('HAri','1999-10-07','wqiugisb',522016);

alter table student add age int;

update student set pincode=110003 where
name='ramu';

delete from student where name='Hari';

alter table student rename date_of_birth to DOB;

alter table student drop column age;