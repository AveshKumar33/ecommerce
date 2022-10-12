
import mysql from "./mysqlDBManager.js";
export default class VendorService {
  constructor() { }

  registerNewVendor = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO vendors(name,contactno,createdat,modifiedat) values('${req.body.name}','${req.body.contactno}',\n"+"
      ,'${req.body.createdat}','${req.body.modifiedat}')`;

      //console.log(cmd);
      mysql.query(cmd, (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          //console.log(rows);
          resolve(rows);
        }
      });
    });
  };

  updateVendorById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE vendors SET contactno="${req.body.contactno}" WHERE id = "${req.params.id}"`;
     // console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllVendors = () => {
    return new Promise((resolve) => {
      let command = `SELECT name,contactno,createdat,modifiedat FROM vendors `;
      //console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showVendorById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
     // console.log(id)
      let command = `SELECT name,contactno,createdat,modifiedat FROM vendors WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeVendorById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      //console.log(id)
      let command = `DELETE FROM vendors WHERE id="${id}"`;
      //console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
