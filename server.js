const express=require('express');
//connect to server.js file to router.js file
const routes=require('./router');
//create global object used for start server and listening on port number and configure middlewares
const app=express();
//middleware configuration
//to resolve encoded request when request will come from url formate
app.use(express.urlencoded({extended:true}));
//to convert req body to JSON
app.use(express.json());
//pass app object for using purpuse into router.js file
routes(app);

//listenning port number 7000
app.listen(7000,()=>{
    console.log('App server is listening on port 7000');
});  