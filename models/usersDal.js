//database connectivity
const sql=require('./db');

//get all data from databases table
  exports.getAll=function(){
    console.log('dal');
          return new Promise (resolve=>{
                 let command="select * from users";
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
  exports.getById=function(user_id){
          return new Promise (resolve=>{
                 let command="select * from users where user_id="+user_id ;
                 sql.query(command,(err,rows,fields)=>{
                     if(!err){
                        resolve(rows);
                     }
                     else{
                        console.log('usersDal')
                         resolve(err);
                     }
        })
    });
};

//insert data into DB
  exports.insert=function(req){
         //console.log(req.body);
         return new Promise (resolve=>{
                let id=req.body.user_id;
                let fn=req.body.first_name;
                let ln=req.body.last_name;
                let cnt=req.body.contact_number;
                let email=req.body.email;
                let psw=req.body.password;
                let rl=req.body.role;
                let command="INSERT INTO users (`use_id`,`first_name`,`last_name`,`contact_number`,`email`,`password`,`role`) VALUES ("+id+",'"+fn+"','"+ln+"','"+cnt+"','"+email+"','"+psw+"','"+rl+"')";
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
           //console.log(req.body);
           return new Promise (resolve=>{
          // console.log(req.body.fname)
                  let command='UPDATE users SET first_name = ? WHERE user_id = ?'; 
                      sql.query(command,[req.body.fname,req.body.user_id],(err,rows,fields)=>{
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
  exports.remove=function(user_id){
          return new Promise (resolve=>{
          let command="DELETE from employees where user_id="+user_id ;
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
