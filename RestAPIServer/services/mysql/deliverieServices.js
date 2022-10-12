
import mysql from "./mysqlDBManager.js";
export default class DeliveryService {
  constructor() { }

  registerNewDelivery = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO deliveries(orderid,vendorid,location,createdat,modifiedat) values('${req.body.orderid}','${req.body.vendorid}',\n"+"
      '${req.body.location}','${req.body.modifiedat}','${req.body.createdat}')`;

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

  updateDeliveryById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE deliveries SET vendorid="${req.body.vendorid}",location="${req.body.location}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllDeliveries = () => {
    return new Promise((resolve) => {
      let command = `SELECT orderid,vendorid,location,createdat,modifiedat FROM deliveries `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showDeliveryById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT orderid,vendorid,location,createdat,modifiedat FROM deliveries WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeDeliveryById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE  FROM deliveries WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
