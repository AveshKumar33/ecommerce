//database connectivity
const sql=require('./db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from deliveries";
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
                 let command="select * from deliveries where deliveryid="+id ;
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
                let id=req.body.deliveryid;
                let vi=req.body.vendorid;
                let oi=req.body.orderid;
    
                let command="INSERT deliveries (`deliveryid`,`vendorid`,`orderid`) VALUES ("+id+",'"+vi+"','"+oi+"')";
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
                  let command='UPDATE deliveries SET vendorid = ? WHERE deliveryid = ?'; 
                      sql.query(command,[req.body.vendorid,req.body.deliveryid],(err,rows,fields)=>{
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
          let command="DELETE from deliveries where deliveryid="+id ;
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
