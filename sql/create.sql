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