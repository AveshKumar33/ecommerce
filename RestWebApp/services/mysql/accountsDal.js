
import mysql from "./mysqldbmgr.js";
export default class AccountManager {
  constructor() { }

  insert = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO accounts(accountnumber,balance,userid,createdat,modifiedat) values('${req.body.accountnumber}','${req.body.balance}','${req.body.userid}','${req.body.createdat}','${req.body.modifiedat}')`;

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
      let command = `UPDATE accounts SET balance="${req.body.balance}" WHERE accountnumber = "${req.params.accountnumber}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM accounts `;
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
      let command = `SELECT * FROM accounts WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  delete = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM accounts WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
