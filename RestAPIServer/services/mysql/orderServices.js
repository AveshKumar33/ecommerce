
import mysql from "./mysqlDBManager.js";
export default class OrderService {
  constructor() { }

  registerNewOrder = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO orders(status,customerid,createdat,modifiedat) values('${req.body.status}','${req.body.customerid}','${req.body.createdat}','${req.body.modifiedat}')`;

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

  updateOrderById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE orders SET status="${req.body.status}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllOrders = () => {
    return new Promise((resolve) => {
      let command = `SELECT status,customerid,createdat,modifiedat FROM orders `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showOrderById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT status,customerid,createdat,modifiedat FROM orders WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeOrderById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM orders WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

}
