insert into users(first_name,last_name,email,password,contact_number,role) values('ram','singh','ram@gmail.com','ram123','9045832145','customer'),
                             ('shakti','singh','shakti@gmail.com','shakti123','8965432167','seller'),
                             ('mudit','raj','mudit@gmail.com','mudit123','9023456781','vendor');

insert into customers(user_id,billing_address,delivery_address) values(1,'kanpur','agra'),(2,'jaipur','jaipur'),(3,'lacknow','mumbai');

insert into Billing_addresses(city,state,pin_code,country,customer_id)
values('kanpur','UP','203412','india',1),
('patna','bihar','452341','india',2),
('mumbai','maharastra','453211','india',3);

insert into Delivery_addresses(city,state,pin_code,country,customer_id)
values('Agra','UP','233412','india',1),
('Ara','bihar','452331','india',2),
('Pune','maharastra','123211','india',3);

insert into Sellers(GSTin,user_id) values('20 %',1),('24 %',2),('27 %',3); insert into Vendors(user_id) values(1),(2),(3);

insert into Products(title,description,unitPrice,quantity,category,seller_id)
values('iPhone4','best smart phone',50000,50,'smart phone',1),
('nexon','best smart car',100000,20,'smart car',2),
('asus','best smart laptop',60000,40,'smart laptop',3);

 insert into Orders(order_date,user_id,status) values('2022/4/20',1,'processed'),
																('2022/2/02',2,'inprogress'),
																('2022/9/22',3,'approved');  
insert into Order_details(quantity,order_id,product_id) values('20',1,2),
																('25',2,1),
																('16',3,3);
                                                                
insert into Payments(payment_date,order_id,amount,payment_mode,transaction_id) values('2022/4/20',1,300.54,'online','debit card'),
																('2022/2/02',2,400.98,'online','cash on delivery'),
																('2022/9/22',3,500.56,'offline','debit card');  