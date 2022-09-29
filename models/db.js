//include my sql module
const mysql=require('mysql');
//connection string
const conUri={
    host:'localhost',
    user:'root',
    password:'password',
    database:'company'
}
//create connection to mysql server
const con=mysql.createConnection(conUri);
con.connect((err)=>{
    if(!err){
        console.log('connection stable successfully with mysql database');
    }
    else{
        console.log(err);
    }
});
module.exports=con;