
import mysql from "./mysqldbmgr.js";
export default class FundManager {
  constructor() { }

  insert = (req, res) => {
    console.log(req.body);
    var x = req.body.amount;
    var y = req.body.fromaccount;
    var z = req.body.toaccount;
    return new Promise((resolve) => {

      mysql.query(`call FundTransfer(${x},${y},${z})`, (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          console.log(rows);
          resolve(rows);
        }
      });
    });
  };

}
