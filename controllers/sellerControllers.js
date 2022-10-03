var dal= require('../models/sellersDal');
//get all data from database table
  exports.getAll=async (req,res)=>{
          let results=[];
           //here dal.js file getAll method is calling
             results=await dal.getAll();
             res.send(results);
          };

//data get from database table based on perticuler id
  exports.getById=async function(req,res){
          let results=[];
            //here dal.js file getById method is calling
              results=await dal.getById(req.params.id);
              res.send(results);
          };
//inserting data into database table    
   exports.insert=async(req,res)=>{
           let results=[];
              //here dal.js file insert method is calling
                results=await dal.insert(req);
                res.send(results); 
           };
//updating data into database table 
   exports.update=async(req,res)=>{
           let results=[];
               //here dal.js file update method is calling
                 results=await dal.update(req);
                 res.send(results);  
           };
//deleting data into database table 
  exports.remove=async(req,res)=>{
          let results=[];
             //here dal.js file remove method is calling
               results=await dal.remove(req.params.id);
                res.send(results);
           }

