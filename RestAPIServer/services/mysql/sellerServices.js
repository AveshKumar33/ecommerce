
import mysql from "./mysqlDBManager.js";
export default class SellerService {
  constructor() { }

  registerNewSeller = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO sellers(userid,name,contactno,location,createdat,modifiedat) values('${req.body.userid}',\n"+"
      '${req.body.name}','${req.body.contactno}','${req.body.createdat}','${req.body.modifiedat}','${req.body.location}')`;

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

  updateSellerById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE sellers SET contactno="${req.body.contactno}",location="${req.body.location}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllSellers = () => {
    return new Promise((resolve) => {
      let command = `SELECT userid,name,contactno,location,createdat,modifiedat FROM sellers `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showSellerById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT userid,name,contactno,location,createdat,modifiedat FROM sellers WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeSellerById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM sellers WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
