//database connectivity
const sql=require('./db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from products";
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
                 let command="select * from products where product_id="+id ;
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
                let pi=req.body.product_id;
                let ttl=req.body.title;
                let dec=req.body.description;
                let up=req.body.unitPrice;
                let qnt=req.body.quantity;
                let ct=req.body.category;
                let si=req.body.seller_id;
                let command="INSERT INTO products (`product_id`,`title`,`description`,`unitPrice`,`quantity`,`category`,`seller_id`) VALUES ("+pi+",'"+ttl+"','"+dec+"','"+up+"','"+qnt+"','"+ct+"','"+si+"')";
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
                  let command='UPDATE products SET unitPrice = ? WHERE product_id = ?'; 
                      sql.query(command,[req.body.unitPrice,req.body.product_id],(err,rows,fields)=>{
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
          let command="DELETE from products where product_id="+id ;
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
