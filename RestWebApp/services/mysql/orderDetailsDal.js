//database connectivity
const sql=require('./db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from orderDetails";
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
  exports.getById=function(order_det_id){
          return new Promise (resolve=>{
                 let command="select * from orderdetails where order_det_id="+order_det_id ;
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
                let id=req.body.order_det_id;
                let oi=req.body.order_id;
                let qnt=req.body.quantity;
                let pi=req.body.product_id;
            
                let command="INSERT INTO orderDetails (`order_det_id`,`order_id`,`quantity`,`product_id`) VALUES ("+id+",'"+oi+"','"+qnt+"','"+pi+"')";
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
                  let command='UPDATE orderDetails SET quantity = ? WHERE order_det_id = ?'; 
                      sql.query(command,[req.body.quantity,req.body.order_det_id],(err,rows,fields)=>{
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
  exports.remove=function(order_det_id){
          return new Promise (resolve=>{
          let command="DELETE from orderDetails where order_det_id="+order_det_id ;
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
