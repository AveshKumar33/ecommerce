
import mysql from "./mysqlDBManager.js";
export default class FundTransactionService {
  constructor() { }

  fundTransaction = (req, res) => {
    console.log(req.body);
    var amount = req.body.amount;
    var fromaccount = req.body.fromaccount;
    var toaccount = req.body.toaccount;
    return new Promise((resolve) => {

      mysql.query(`call FundTransfer(${amount},${fromaccount},${toaccount})`, (err, rows, fields) => {
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
