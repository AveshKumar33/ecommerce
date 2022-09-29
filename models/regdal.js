const sql=require('./db');
//register data into DB
exports.register=function(req){
    console.log(req.body);
    return new Promise (resolve=>{
        
        let password=req.body.password;
        let location=req.body.location;
        let age=req.body.age;
        let email=req.body.email;

        let command="INSERT INTO registrations (`email`,`password`,`location`,`age`) VALUES ('"+email+"','"+password+"','"+location+"',"+age+")";
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