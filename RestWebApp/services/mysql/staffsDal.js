
import mysql from "./mysqldbmgr.js";
export default class StaffManager {
  constructor() { }

  insert = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO staff(userid,firstname,lastname,contactno,empid,createdat,modifiedat) values('${req.body.userid}',\n"+"
      '${req.body.firstname}','${req.body.lastname}','${req.body.contactno}','${req.body.empid}','${req.body.createdat}','${req.body.modifiedat}')`;

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
      let command = `UPDATE sellers SET contactno="${req.body.contactno}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM staffs `;
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
      let command = `SELECT * FROM users WHERE id="${id}"`;
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
