
//work progress
//database connectivity
const sql=require('../../models/db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from customers";
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
  exports.getById=function(customer_id){
          return new Promise (resolve=>{
                 let command="select * from customers where customer_id="+customer_id ;
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
                let id=req.body.customer_id;
                let da=req.body.delivery_address;
                let ba=req.body.billing_address;
                let ui=req.body.user_id;
                let command="INSERT INTO customers (`customer_id`,`billing_address`,`delivery_address`,`user_id`) VALUES ("+id+",'"+ba+"','"+da+"','"+ui+"')";
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
                  let command='UPDATE customers SET delivery_address = ? WHERE customer_id = ?'; 
                      sql.query(command,[req.body.delivery_address,req.body.customer_id],(err,rows,fields)=>{
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
  exports.remove=function(customer_id){
          return new Promise (resolve=>{
          let command="DELETE from customers where customer_id="+customer_id ;
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
