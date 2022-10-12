
import mysql from "./mysqlDBManager.js";
export default class PaymentService {
  constructor() { }

  registerNewPayment = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO payments(totalamount,discountpercentage,payableamount,orderid,modeofpayment,createdat,modifiedat) values('${req.body.totalamount}',\n"+"
      '${req.body.discountpercentage}','${req.body.payableamount}','${req.body.orderid}','${req.body.modeofpayment}','${req.body.createdat}','${req.body.modifiedat}')`;

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

  updatePaymentById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE payments SET discountpercentage="${req.body.discountpercentage}" WHERE orderid = "${req.params.orderid}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllPayments = () => {
    return new Promise((resolve) => {
      let command = `SELECT totalamount,discountpercentage,payableamount,orderid,modeofpayment,createdat,modifiedat FROM payments `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showPaymentById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT totalamount,discountpercentage,payableamount,orderid,modeofpayment,createdat,modifiedat FROM payments WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removePaymentById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM payments WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

}
