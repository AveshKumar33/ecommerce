
import mysql from "./mysqldbmgr.js";
export default class FeedbackManager {
  constructor() {}

  insert = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO feedbacks(imageurl,productid,customerid,description,createdat,modifiedat) values('${req.body.imageurl}',\n"+"
      '${req.body.productid}','${req.body.customerid}','${req.body.description}','${req.body.createdat}','${req.body.modifiedat}')`;

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
      let command = `UPDATE feedbacks SET description="${req.body.description}",customerid = "${req.params.customerid}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  getAll = () => {
    return new Promise((resolve) => {
      let command = `SELECT * FROM feedbacks `;
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
      let command = `SELECT * FROM feedbacks WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  delete = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM feedbacks WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
