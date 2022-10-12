
import mysql from "./mysqlDBManager.js";

export default class TransactionService {
  constructor() { }

  registerNewTransaction = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO transactions(fromaccount,toaccount,amount,createdat) values('${req.body.fromaccount}','${req.body.toaccount}','${req.body.amount}',,'${req.body.createdat}')`;

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

  updateTransactionById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE transactions SET amount="${req.body.amount}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllTransactions = () => {
    return new Promise((resolve) => {
      let command = `SELECT fromaccount,toaccount,amount,createdat FROM transactions `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showTransactionById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT fromaccount,toaccount,amount,createdat FROM transactions WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeTransactionById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM transactions WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
