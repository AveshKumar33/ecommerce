
import mysql from "./mysqldbmgr.js";
export default class ProductManager {
  constructor() { }

  insert = (req, res, next) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO products(title,description,imageurl,quantity,price,categoryid,sellerid,createdat,modifiedat)
       values('${req.body.title}',
      '${req.body.description}','${req.body.imageurl}','${req.body.quantity}','${req.body.price}',
      '${req.body.categoryid}','${req.body.sellerid}'
      ,'${req.body.createdat}','${req.body.modifiedat}')`;

      //console.log(cmd);
      mysql.query(cmd, (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
         // console.log(rows);

          resolve(rows);
          next();
        }
      });
    });
  };

  update = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE products SET quantity="${req.body.quantity}",price="${req.body.price}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM products `;
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
      let command = `SELECT * FROM products WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  delete = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM products WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
