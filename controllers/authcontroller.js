var dal= require('../models/regdal');
exports.login=(req,res)=>{
    let data=req.body;
    console.log(data);
    if(data.email==="katiyaravesh333@gmail.com" && data.password==="avesh")
     res.send('you are proper valid user  email id '+data.email+"password "+data.password);
     else
     res.send('please enter valid username and password');
};
exports.register=async(req,res)=>{
    let results=[];
    //here dal.js file register method is calling
    results=await dal.register(req);
    res.send("registration has been success"); 
};