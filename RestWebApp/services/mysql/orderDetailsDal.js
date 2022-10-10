
import mysql from "./mysqldbmgr.js";
export default class OrderDetailManager {
  constructor() { }

  insert = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO orderDetails(quantity,price,orderid,productid,createdat,modifiedat) values('${req.body.quantity}',\n"+"
      '${req.body.price}','${req.body.orderid}','${req.body.productid}','${req.body.createdat}','${req.body.modifiedat}')`;

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

  update = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE orderDetails SET price="${req.body.price}",quantity="${req.body.quantity}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM orderdetails `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  getById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT * FROM orderDetails WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  delete = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM users WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
