create table product(
name varchar(100),
category varchar(100),
price int,
brand varchar(100),
rating float);

insert into product(name,category,price,brand,rating)
values('Smart Watch','Gadgets',17000,'Apple',4.9),
('Smart Cam','Gadgets',2600,'Real me',4.7),
('Smart TV','Gadgets',40000,'Sony',4.0),
('Realme Band','Gadgets',3000,'Realme',4.6);

select * from product;

select * from product where rating>=4.5;

select * from product where category like 'Food';

select * from product where brand like '____';

select * from product where price<20000 and brand='Apple';

select * from product where name not like '%Jeans%'
and category='Clothing';

SELECT * FROM product
WHERE brand IN( 'Britania', 'Lays', 'Cadbary' );


select * from product where price
between 1000 and 10000;

select name,price,brand,rating from product 
where brand='Denim' order by price asc,
rating DESC;
select distinct category from product
order by category;

select * from product order by rating desc limit 5
offset 5;

select sum(price) as food from product where 
category='Food';

select max(price),min(price) from product
where rating>3

select count(*) from product

select category,sum(price) as total from product
where rating >4 group by category;