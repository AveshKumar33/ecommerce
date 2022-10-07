//database connectivity
const sql=require('./db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from orders";
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
  exports.getById=function(order_id){
          return new Promise (resolve=>{
                 let command="select * from orders where order_id="+order_id ;
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
                let id=req.body.order_id;
                let od=req.body.order_date;
                let sts=req.body.status;
                let ui=req.body.user_id;
                let ta=req.body.totalAmount;
                let command="INSERT INTO orders (`order_id`,`order_date`,`status`,`user_id`,`totalAmount`) VALUES ("+id+",'"+od+"','"+sts+"','"+ui+"','"+ta+"')";
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
                  let command='UPDATE orders SET status = ? WHERE order_id = ?'; 
                      sql.query(command,[req.body.status,req.body.order_id],(err,rows,fields)=>{
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
  exports.remove=function(order_id){
          return new Promise (resolve=>{
          let command="DELETE from orders where order_id="+order_id ;
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
