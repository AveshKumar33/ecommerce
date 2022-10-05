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

===================== DB avesh ===========================================================================================
insert into customers(userid) values(1),(2),(3),(4),(5);
 insert into users(userid,loginname,password,address) values(1,'mukesh','muk123','indore'),
																(2,'hareesh','har123','muradabad'),
																(3,'suresh','sur123','gajiyabad'),
                                                                (4,'yubraj','yub123','mohali'),
                                                                (5,'kuldeep','kul123','kanpur');
insert into orders(orderdate,totalamount,customerid,orderstatus) values('2022-07-23','80000',1,'success'),
                                                                         ('2022-03-13','70000',2,'initiated'),
                                                                           ('2022-03-13','70000',3,'approved'),
                                                                             ('2022-03-11','55000',4,'success'),
                                                                              ('2022-03-11','22000',5,'process');           
            
insert into accounts(accountcteateddate,balance,userid) values('2022-07-23','80000',1),
                                                                ('2022-03-13','900000',2),
                                                                  ('2022-03-13','700000',3),
                                                                   ('2022-03-11','550000',4),
                                                                    ('2022-03-12','220000',5);   
                                           
insert into transactions(date,amount,fromaccountid,toaccountid) values('2022-07-23','8008',6,8),
                                                                       ('2022-03-13','9009',6,7),
                                                                        ('2022-03-13','7007',7,8),
                                                                          ('2022-03-11','5505',8,9),
                                                                            ('2022-03-12','2202',6,10);                                                                                      
 insert into payments(date,paymentmode,amount,orderid,transactionid) values('2022-07-23','netbanking','808',11,6),
                                                                             ('2022-03-13','UPI','909',12,7),
                                                                              ('2022-03-13','debit card','707',13,8),
                                                                                ('2022-03-11','phone pay','555',14,9),
                                                                                  ('2022-03-12','pattem','222',15,10); 
																						 
																						 
 insert into Products(title,imageurl,unitPrice,stockavaiables,category)
values('iPhone4','http://best smart phone',50000,50,'smart phone'),
('nexon','http://best smart car',100000,20,'smart car'),
('asus','http://best smart laptop',60000,40,'smart laptop'),
('boat','http://best smart watch',6000,48,'smart watch'),
('chinny','http://best smart robot',9990000,98,'smart robot'),
('vikrant','http://best smart laptop',6066000,4,'smart aircraft'),
('tvs','http://best smart bike',60000,400,'smart bike');                                                                                         
                          
insert into Orderdetails(items,orderid,productid) values('20',11,2),
														('25',12,1),
														('16',13,3),
                                                        ('44',14,4),
                                                        ('116',15,5);
 insert into Vendors(userid) values(4),(5),(6);

insert into deliveries(vendorid,orderid) values(1,11),(2,12),(3,13);