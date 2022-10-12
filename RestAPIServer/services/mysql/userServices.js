import jwt from 'jsonwebtoken';
import mysql from "./mysqlDBManager.js";
export default class UserService {
  constructor() { }

  registerNewUser = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO users(email,password,usertype) values('${req.body.email}','${req.body.password}','${req.body.usertype}')`;

      console.log(cmd);
      mysql.query(cmd, (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          console.log(rows +"your registration has been successfully done ");
          resolve(rows);
        }
      });
    });
  };

  updateUserById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE users SET password="${req.body.password}" WHERE email = "${req.params.email}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllUsers = () => {
    return new Promise((resolve) => {
      let command = `SELECT email,password,usertype FROM users `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showUserById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT email,password,usertype FROM users WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeUserById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE  FROM users WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
  // Seller
  login = function (req, res) {
    return new Promise((resolve) => {
      let data = req.body;
      let command = `SELECT email FROM users WHERE email="${data.email}" AND password="${data.password}"`;
      mysql.query(command, (err, rows, fields) => {
        if (err) {
          console.log("Error:", err);
        }

        let allUsersStr = JSON.stringify(rows);
        var allUsers = JSON.parse(allUsersStr);
        //console.log(allUsers[0].email+"this data caming from database");
        if (allUsers.length > 0) {
          const token = jwt.sign({
            email: allUsers[0].email,
          },

            'SECRET', {
            expiresIn: '7d'

          })

          console.log(
            "token=" + token
          );

          resolve(token);

        } else {
          resolve("Invalid User");
        }
      });
    });
  };
}

