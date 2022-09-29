var dal= require('../models/dal');
//get all data from databases table
exports.getAll=async (req,res)=>{
    let results=[];
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

exports.update=async(req,res)=>{
    let results=[];
    //here dal.js file update method is calling
    results=await dal.update(req);
    res.send(results);  
};

exports.remove=async(req,res)=>{
    let results=[];
    //here dal.js file remove method is calling
    results=await dal.remove(req.params.id);
    res.send(results);
    };

     
