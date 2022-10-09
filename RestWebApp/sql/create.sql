
CREATE DATABASE myecommerce;
USE myecommerce;
CREATE TABLE users(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email varchar(50) NOT NULL,
    password varchar(6) NOT NULL,
    usertype ENUM ('customer', 'seller', 'staff', 'vendor')
);
CREATE TABLE customers(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid int not null,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    contactno VARCHAR(11) UNIQUE,
    location VARCHAR(50),
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY (userid) REFERENCES users(id)
);

    CREATE TABLE sellers(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid int not null,
    name VARCHAR(20) NOT NULL,
    contactno VARCHAR(10) UNIQUE,
    location VARCHAR(50),
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE staffs(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid int,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    contactno VARCHAR(10) UNIQUE NOT NULL,
    empid INT NOT NULL UNIQUE NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY (userid) REFERENCES users(id)
);
CREATE TABLE vendors(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    userid int not null,
    name VARCHAR(20) NOT NULL,
    contactno VARCHAR(12) UNIQUE NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY (userid) REFERENCES users(id)
);            

CREATE TABLE categories(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(20) NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME
);
CREATE TABLE products(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    description VARCHAR(300),
    imageurl VARCHAR(250),
    quantity INT,
    price FLOAT DEFAULT 0,
    categoryid INT NOT NULL,
    sellerid INT NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(categoryid) REFERENCES categories(id),
    FOREIGN KEY(sellerid) REFERENCES sellers(id)
);
CREATE TABLE orders(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    status VARCHAR(20),
    customerid INT NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(customerid) REFERENCES customers(id)
);
CREATE TABLE ordersDetails(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    quantity INT,
    price FLOAT DEFAULT 0,
    orderid INT NOT NULL,
    productid INT NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(orderid) REFERENCES orders(id),
    FOREIGN KEY(productid) REFERENCES products(id)
);
CREATE TABLE payments(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    -- amount FLOAT DEFAULT 0,
    totalamount float DEFAULT 0,
    discountpercentage float DEFAULT 0,
    payableamount float DEFAULT 0,
    orderid INT NOT NULL,
    modeofpayment ENUM ('netbanking', 'UPI', 'debitcard', 'creditcard'),
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(orderid) REFERENCES orders(id)
);
CREATE TABLE feedbacks(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    imageurl VARCHAR(250) NOT NULL,
    productid INT NOT NULL,
    customerid INT NOT NULL,
    description VARCHAR(500) NOT NULL,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(productid) REFERENCES products(id),
    FOREIGN KEY(customerid) REFERENCES customers(id)
);
CREATE TABLE deliveries(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    orderid INT NOT NULL,
    vendorid INT NOT NULL,
    location VARCHAR(50),
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(orderid) REFERENCES orders(id),
    FOREIGN KEY(vendorid) REFERENCES vendors(id)
);
CREATE TABLE accounts (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    accountnumber VARCHAR(50),
    balance float,
    userid INT not null,
    createdat DATETIME,
    modifiedat DATETIME,
    FOREIGN KEY(userid) REFERENCES users(id)
);


