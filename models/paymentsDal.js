//database connectivity
const sql=require('./db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from payments";
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
  exports.getById=function(payment_id){
          return new Promise (resolve=>{
                 let command="select * from payments where payment_id="+payment_id;
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
         //console.log(req.body);
         return new Promise (resolve=>{
                let id=req.body.payment_id;
                let pd=req.body.payment_date;
                let od=req.body.order_id;
                let amt=req.body.amount;
                let pm=req.body.payment_mode;
                let ti=req.body.transaction_id;
                let command="INSERT INTO payments (`payment_id`,`payment_date`,`order_id`,`amount`,`payment_mode`,`transaction_id`) VALUES ("+id+",'"+pd+"','"+od+"','"+amt+"','"+pm+"','"+ti+"')";
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
           return new Promise (resolve=>{
                  let command='UPDATE payments SET amount = ? WHERE payment_id = ?'; 
                      sql.query(command,[req.body.amount,req.body.payment_id],(err,rows,fields)=>{
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
  exports.remove=function(payment_id){
          return new Promise (resolve=>{
          let command="DELETE from payments where payment_id="+payment_id ;
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
