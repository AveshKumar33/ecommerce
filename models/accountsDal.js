//database connectivity
const sql=require('./db');


//get all data from databases table
  exports.getAll=function(){
          return new Promise (resolve=>{
                 let command="select * from accounts";
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
                 let command="select * from accounts where accountid="+id ;
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
                let id=req.body.accountid;
                let acd=req.body.accountcteateddate;
                let bal=req.body.balance;
                let ui=req.body.userid;
    
                let command="INSERT accounts (`accountid`,`accountcteateddate`,`balance`,`userid`) VALUES ("+id+",'"+acd+"','"+bal+"','"+ui+"')";
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
                  let command='UPDATE accounts SET balance = ? WHERE accountid = ?'; 
                      sql.query(command,[req.body.balance,req.body.accountid],(err,rows,fields)=>{
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
          let command="DELETE fromaccounts where accountid="+id ;
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
