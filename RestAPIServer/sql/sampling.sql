select c.first_name,cd.city from customers c inner join customer_addresses cd
on c.customer_id=cd.customer_id;

ALTER TABLE Orders 
    add totalAmount varchar(30);
    update orders
    set totalAmount=5000 where order_id=3;
    select * from orders;
<======================>//featching all information about users for billing_addresses===================>
    select u.first_name,u.last_name,u.email,u.password,u.contact_number,u.role,b.city,b.state,
b.pin_code,b.country from customers c  inner join   billing_addresses b 
on c.customer_id=b.billing_add_id
inner join users u
on c.customer_id=u.user_id;