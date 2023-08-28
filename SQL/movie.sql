CREATE table movie(
id int not null PRIMARY KEY,
name varchar(100),
genre varchar(100),
budget_in_cr float,
collection_in_cr float,
rating float,
release_date datetime);

select * from movie;

CREATE TABLE cast(
actor_id int not null primary key,
movie_id int,
role varchar(100));

create table actor(
actor_id int,
name varchar(100),
age int);

insert into movie(id,name,genre,budget_in_cr,collection_in_cr,rating,release_date)
values
(2,'Inspection','Action',16.0,82.68,8.9,'2010-07-14'),
(3,'The Dark Knight','Action',18,100.5,9.0,'2008-07-16'),
(4,'The Toy Story','animation',20.0,106.7,8.5,'2010-06-25');



select *,collection_in_cr - budget_in_cr as profit from movie 
where 
genre in('Action','animation');

select *,collection_in_cr - budget_in_cr as profit from movie 
where rating >8.5

select strftime('%d',release_date) as year from movie

select name,strftime('%Y',release_date) as year from movie

select strftime('%m',release_date) as month,
count(*) as total_mov
from movie
where
strftime('%Y',release_date)='2010'
--group by strftime('%m',release_date)

select * from movie where
release_date =strftime('%m',release_date)='04' or
strftime('%m',release_date)='06';
SELECT
  name,
  ROUND(collection_in_cr, 1) AS RoundedValue,
  CEIL(collection_in_cr) AS CeilValue,
  FLOOR(collection_in_cr) AS FloorValue
FROM
  movie;

SELECT id, name,
  CASE
    WHEN collection_in_cr - budget_in_cr<= 100 THEN collection_in_cr - budget_in_cr * 0.1
    WHEN (collection_in_cr - budget_in_cr>100 AND collection_in_cr - budget_in_cr<500)
     THEN collection_in_cr - budget_in_cr * 0.15
    ELSE collection_in_cr - budget_in_cr * 0.18
  END AS tax_amount
FROM
  movie;
  select name,
  CASE
  when rating<5 then 'poor'
  when rating>=5 and rating<=7 then 'avarage'
  else 'good'
  end as review
  from movie

  SELECT
  count(
    CASE
      WHEN rating>= 8 THEN 1
    END
  ) AS above_eight,
  count(
    CASE
      WHEN rating<8 THEN 1
    END
  ) AS below_eight
FROM
  movie
WHERE
  CAST(strftime('%Y', release_date) AS INTEGER) BETWEEN 2015
  AND 2020;


