//database connectivity
const sql=require('./db');


//get all data from databases table
exports.getAll=function(){
    return new Promise (resolve=>{
        let command="select * from employees";
        sql.query(command,(err,rows,fields)=>{
            if(!err){
                resolve(rows);
            }
            else{
                resolve(err);
            }
        })
    });
};
//data get from database table based on perticuler id
exports.getById=function(id){
    return new Promise (resolve=>{
        let command="select * from employees where Empid="+id ;
        sql.query(command,(err,rows,fields)=>{
            if(!err){
                resolve(rows);
            }
            else{
                resolve(err);
            }
        })
    });
};

//insert data into DB
exports.insert=function(req){
    console.log(req.body);
    return new Promise (resolve=>{
        let id=req.body.id;
        let fn=req.body.fn;
        let ln=req.body.ln;
        let cnt=req.body.cnt;
        let email=req.body.email;

        let command="INSERT INTO employees (`Empid`,`first_name`,`last_name`,`contact_no`,`email_id`) VALUES ("+id+",'"+fn+"','"+ln+"','"+cnt+"','"+email+"')";
        sql.query(command,(err,rows,fields)=>{
            if(!err){
                resolve(rows);
            }
            else{
                resolve(err);
            }
        })
    });
};
//data update from database table based on perticuler id
exports.update=function(req){
    console.log(req.body);
    return new Promise (resolve=>{
        console.log(req.body.fname)
        let command='UPDATE employees SET first_name = ? WHERE Empid = ?'; 
        sql.query(command,[req.body.fname,req.body.id],(err,rows,fields)=>{
            if(!err){
                resolve(rows);
            }
            else{
                resolve(err);
            }
        })
    });
};

//data remove from database table based on perticuler id
exports.remove=function(id){
    return new Promise (resolve=>{
        let command="DELETE from employees where Empid="+id ;
        sql.query(command,(err,rows,fields)=>{
            if(!err){
                resolve(rows);
            }
            else{
                resolve(err);
            }
        })
    });
};
