
import mysql from "./mysqlDBManager.js";
export default class CustomerService {
  constructor() { }

  registerNewCustomer = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO customers(firstname,lastname,contactno,location,createdat,modifiedat) values('${req.body.firstname}',\n" +"
      '${req.body.lastname}','${req.body.contactno}','${req.body.location}','${req.body.createdat}','${req.body.modifiedat}')`;

      console.log(cmd);
      mysql.query(cmd, (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          console.log(rows);

          resolve(rows);
        }
      });
    });
  };

  updateCustomerById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE customers SET contactno="${req.body.contactno}",location="${req.body.location}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllCustomers = () => {
    return new Promise((resolve) => {
      let command = `SELECT firstname,lastname,contactno,location,createdat,modifiedat FROM customers `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showCustomerById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT firstname,lastname,contactno,location,createdat,modifiedat FROM customers WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeCustomerById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE  FROM customers WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
