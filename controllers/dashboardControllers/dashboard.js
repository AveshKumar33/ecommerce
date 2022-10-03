var dal= require('../models/dashboarddDal');
//public business scenanio
exports.getOrderList=async (req,res)=>{
    let results=[];
     //here dal.js file getAll method is calling
       results=await dal.getOrderList();
       res.send(results);
    };

    exports.getAvailableProducts=async (req,res)=>{
        let results=[];
         //here dal.js file getAll method is calling
           results=await dal.getAvailableProducts();
           res.send(results);
        };

        exports.getUserRole=async (req,res)=>{
            let results=[];
             //here dal.js file getAll method is calling
               results=await dal.getUserRole();
               res.send(results);
            };

            exports.getCustomerOrders=async (req,res)=>{
                let results=[];
                 //here dal.js file getAll method is calling
                   results=await dal.getCustomerOrders();
                   res.send(results);
                };

                exports.getCustomerpayments=async (req,res)=>{
                    let results=[];
                     //here dal.js file getAll method is calling
                       results=await dal.getCustomerpayments();
                       res.send(results);
                    };

                    exports.getAllProductDetails=async (req,res)=>{
                        let results=[];
                         //here dal.js file getAll method is calling
                           results=await dal.getAllProductDetails();
                           res.send(results);
                        };
//public business scenanio
exports.updateExistsProductDetails=async (req,res)=>{
    let results=[];
     //here dal.js file getAll method is calling
       results=await dal.updateExistsProductDetails();
       res.send(results);
    };

    exports.removeExistsProductfromCategory=async (req,res)=>{
        let results=[];
         //here dal.js file getAll method is calling
           results=await dal.removeExistsProductfromCategory();
           res.send(results);
        };
        exports.orderStatus=async (req,res)=>{
            let results=[];
             //here dal.js file getAll method is calling
               results=await dal.orderStatus();
               res.send(results);
            };
