import mysql from "./mysqlDBManager.js";
export default class DashboardService {
  constructor() { }

  
  topTenOrders = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select orderid,count(*) total_no_of_payment_this_orderid from payments group by orderid order by total_no_of_payment_this_orderid desc limit 10 `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  topTenCustomers = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select customerid,count(*) total_no_of_order_this_customerid from orders group by customerid order by 
      total_no_of_order_this_customerid desc limit 10 `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  topTenSellers = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select sellerid,count(*) total_no_of_product_sellerid from products 
      group by sellerid order by total_no_of_product_sellerid desc limit 10 `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  topTenVendors = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select vendorid,count(*) total_no_of_delivery_this_vendorid from deliveries group by vendorid 
      order by total_no_of_delivery_this_vendorid desc limit 10 `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
 
  topTenProducts = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select productid,count(*) total_no_of_orders_this_productid from orderDetails group by productid 
      order by total_no_of_orders_this_productid desc limit 10  `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  orderstatus = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `SELECT status, COUNT(*) orderstatus FROM orders GROUP BY status  `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  availableProducts = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `SELECT title,id,quantity FROM products WHERE quantity >=1`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  unavailableProducts = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `SELECT title,id,quantity FROM products WHERE quantity =0`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  productByCategoryName = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select c.name,p.title,p.description,p.imageurl,p.quantity,p.price,p.createdat,p.modifiedat from products p inner join categories c
      on p.categoryid=c.id`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  productCountOfEachCategory = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = ` select categoryid,count(*) total_no_of_products_this_categoryid from products group by categoryid order by total_no_of_products_this_categoryid desc `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  customerProfile = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = ` select c.firstname,c.lastname,c.contactno,u.email,u.password,u.usertype,c.location,c.createdat,
      c.modifiedat from customers c INNER JOIN users u on c.userid=u.id where u.usertype='customer'`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  vendorProfile = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select v.name,v.contactno,u.email,u.password,u.usertype,v.createdat,
      v.modifiedat from vendors v INNER JOIN users u on v.userid=u.id where u.usertype='vendor'`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  sellerProfile = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select s.name,s.contactno,u.email,u.password,u.usertype,s.location,s.createdat,
      s.modifiedat from sellers s INNER JOIN users u on s.userid=u.id where u.usertype='seller'`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  staffProfile = () => {
    console.log('order dal')
    return new Promise((resolve) => {
    
      let command = `select s.firstname,s.lastname,s.empid,s.contactno,u.email,u.password,u.usertype,s.createdat,
      s.modifiedat from staffs s INNER JOIN users u on s.userid=u.id where u.usertype='staff'`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
