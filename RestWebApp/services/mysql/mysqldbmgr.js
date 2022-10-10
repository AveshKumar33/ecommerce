//include my sql module
import mysql from 'mysql'
//connection string
const conUri = {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myecommerce'
}
//create connection to mysql server
const con = mysql.createConnection(conUri);
con.connect((err) => {
    if (!err) {
        console.log('connection stable successfully with mysql database');
    }
    else {
        console.log(err);
    }
});
export default con;