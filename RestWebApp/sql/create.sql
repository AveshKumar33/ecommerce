CREATE TABLE Users(user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,first_name VARCHAR(100) NOT NULL,last_name VARCHAR(100),
			email VARCHAR(100) NOT NULL,password VARCHAR(255) NOT NULL,contact_number VARCHAR(13) NOT NULL,role VARCHAR(13) NOT NULL);


  CREATE TABLE Customers(customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,billing_addresses VARCHAR(50) NOT NULL,
      delivery_addresses VARCHAR(50) NOT NULL,user_id INT NOT NULL,
  CONSTRAINT fk_Customers_users FOREIGN KEY(user_id) REFERENCES Users(user_id));
 ===============================================================================================================================================================           
CREATE TABLE Customers(customer_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,user_id INT NOT NULL,
  CONSTRAINT fk_Customers_users FOREIGN KEY(user_id) REFERENCES Users(user_id));

CREATE TABLE Billing_addresses(billing_add_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,city VARCHAR(50) NOT NULL,state VARCHAR(50),
			pin_code VARCHAR(100) NOT NULL,country VARCHAR(35) NOT NULL, customer_id INT NOT NULL,
            CONSTRAINT fk_Billing_addresses_Customer FOREIGN KEY(customer_id) REFERENCES Customers(customer_id));

CREATE TABLE Delivery_addresses(delivery_add_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,city VARCHAR(50) NOT NULL,state VARCHAR(50),
			pin_code VARCHAR(100) NOT NULL,country VARCHAR(35) NOT NULL, customer_id INT NOT NULL,
            CONSTRAINT fk_delivery_addresses_Customer FOREIGN KEY(customer_id) REFERENCES Customers(customer_id));

=========================================================================================================================================================================
CREATE TABLE Sellers(seller_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,GSTin VARCHAR(35) NOT NULL,user_id INT NOT NULL,
  CONSTRAINT fk_Sellers_users FOREIGN KEY(user_id) REFERENCES Users(user_id));

CREATE TABLE Vendors(vendor_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,user_id INT NOT NULL,
  CONSTRAINT fk_Vendors_users FOREIGN KEY(user_id) REFERENCES Users(user_id));

CREATE TABLE Products(product_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50) NOT NULL, description VARCHAR(300) NOT NULL,
 			unitPrice INT NOT NULL,quantity INT NOT NULL,category VARCHAR(50) NOT NULL,seller_id INT NOT NULL,
			CONSTRAINT fk_Products_Sellers FOREIGN KEY(seller_id) REFERENCES Sellers(seller_id)); 

CREATE TABLE Orders (order_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, order_date DATETIME DEFAULT CURRENT_TIMESTAMP, status VARCHAR(20), user_id INT NOT NULL,
			CONSTRAINT fk_Orders_Users FOREIGN KEY(user_id) REFERENCES Users(User_id));

CREATE TABLE Order_details (order_det_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, quantity VARCHAR(20), order_id INT NOT NULL,product_id INT NOT NULL,
			CONSTRAINT fk_Orders_details_Orders FOREIGN KEY(order_id) REFERENCES orders(order_id),
            CONSTRAINT fk_Orders_details_Products FOREIGN KEY(product_id) REFERENCES Products(product_id));

CREATE TABLE Payments(payment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,order_id INT, 
    amount float, payment_mode varchar(50),transaction_id  varchar(50) NOT NULL,
			CONSTRAINT fk_payments_orders FOREIGN KEY(order_id) REFERENCES orders(order_id));

      =======================================================================================================================================
      
              CREATE TABLE Scanners(transaction_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,transaction_date DATETIME DEFAULT CURRENT_TIMESTAMP ,account_id INT, amount INT, payment_mode VARCHAR(50),
operation VARCHAR(1) NOT NULL,
			CONSTRAINT fk_Scanner_accounts FOREIGN KEY(account_id) REFERENCES Accounts(account_id));

      
      CREATE TABLE Accounts(account_id  INT NOT NULL PRIMARY KEY AUTO_INCREMENT, balance FLOAT);
 ===================================================================================================================
 getorderderdetails
  select u.first_name,u.last_name,u.email,u.password,u.contact_number,u.role,c.billing_address,c.delivery_address,
  o.order_date,o.status from users u inner join customers c
  on u.user_id=c.customer_id
  inner join orders o
  on u.user_id=o.order_id;   


  ========================new DB avesh====================================================================
  	create database avesh;
    use  avesh;
   CREATE TABLE users (userid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, loginname VARCHAR(60),password VARCHAR(60),address VARCHAR(60));
      
    
	CREATE TABLE Customers(customerid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,userid INT NOT NULL,
  CONSTRAINT fk_Customers_users FOREIGN KEY(userid) REFERENCES Users(userid));

          
 CREATE TABLE Orders (orderid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,  orderdate DATETIME DEFAULT CURRENT_TIMESTAMP,  totalamount float(20),
  customerid INT NOT NULL,orderstatus varchar(20),
CONSTRAINT fk_Orders_customers FOREIGN KEY(customerid) REFERENCES customers(customerid));

            
 CREATE TABLE accounts (accountid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,  accountcteateddate DATETIME DEFAULT CURRENT_TIMESTAMP,  balance float(20),
  userid INT NOT NULL,
CONSTRAINT fk_accounts_users FOREIGN KEY(userid) REFERENCES users(userid));
                                                
                                                                                         
  CREATE TABLE transactions (transactionid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,date DATETIME DEFAULT CURRENT_TIMESTAMP,  amount float(20),
  fromaccountid INT NOT NULL, toaccountid INT NOT NULL,
CONSTRAINT fk_transactions_accounts_1 FOREIGN KEY(fromaccountid) REFERENCES accounts(accountid),
CONSTRAINT fk_transactions_accounts_2 FOREIGN KEY(toaccountid) REFERENCES accounts(accountid));

 CREATE TABLE payments (paymentid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,date DATETIME DEFAULT CURRENT_TIMESTAMP,  amount float(20),paymentmode varchar(20),
  orderid INT NOT NULL, transactionid INT NOT NULL,
CONSTRAINT fk_payments_orders FOREIGN KEY(orderid) REFERENCES orders(orderid),
CONSTRAINT fk_payments_transactions FOREIGN KEY(transactionid) REFERENCES transactions(transactionid));
                                                              
   CREATE TABLE Products(productid INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(50) NOT NULL, imageurl VARCHAR(300) NOT NULL,
 			unitPrice INT NOT NULL,stockavaiables INT NOT NULL,category VARCHAR(50));
		
                              
                                                                                         
  
  CREATE TABLE orderdetails (orderdetailsid INT NOT NULL PRIMARY KEY AUTO_INCREMENT, items int, orderid INT NOT NULL,productid INT NOT NULL,
			CONSTRAINT fk_Orders_details_Orders FOREIGN KEY(orderid) REFERENCES orders(orderid),
            CONSTRAINT fk_Orders_details_Products FOREIGN KEY(productid) REFERENCES Products(productid));


   CREATE TABLE Vendors(vendorid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,userid INT NOT NULL,
  CONSTRAINT fk_Vendors_users FOREIGN KEY(userid) REFERENCES Users(userid));
 
  
  
  
    CREATE TABLE deliveries(deliveryid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,vendorid INT NOT NULL,orderid INT NOT NULL,
  CONSTRAINT fk_deliveries_Vendors FOREIGN KEY(vendorid) REFERENCES vendors(vendorid),
    CONSTRAINT fk_deliveries_orders FOREIGN KEY(orderid) REFERENCES orders(orderid));

CREATE PROCEDURE `Debit` (IN amount float, IN fromaccount int,IN toaccount int)
BEGIN
START TRANSACTION;
SET @Amount=amount;
SET @FromAccount=fromaccount;
SET @ToAccount=toaccount;
UPDATE accounts SET balance=balance-@Amount WHERE accountid=@FromAccount;
COMMIT; 
END