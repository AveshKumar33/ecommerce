
import mysql from "./mysqlDBManager.js";
export default class CategoryService {
  constructor() { }

  registerNewCategory = (req, res) => {
    return new Promise((resolve) => {
      var cmd = `INSERT INTO categories(name,createdat,modifiedat) values('${req.body.name}','${req.body.createdat}','${req.body.modifiedat}')`;

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

  updateCategoryById = (req, res) => {
    return new Promise((resolve) => {
      let command = `UPDATE categories SET name="${req.body.name}" WHERE id = "${req.params.id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showAllCategories = () => {
    return new Promise((resolve) => {
      let command = `SELECT name,createdat,modifiedat FROM categories `;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  showCategoryById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `SELECT name,createdat,modifiedat FROM categories WHERE id="${id}"`;
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };

  removeCategoyById = (req, res) => {
    return new Promise((resolve) => {
      let id = req.params.id;
      console.log(id)
      let command = `DELETE FROM categories WHERE id="${id}"`;
      console.log(command);
      mysql.query(command, (err, rows, fields) => {
        resolve(rows);
      });
    });
  };
}
