const express=require('express');
const expressSession=require('express-session');
//connect to server.js file to router.js file
const routes=require('./router');
const oneDay= 1000 * 60 * 60 * 24;
//create global object used for start server and listening on port number and configure middlewares
const app=express();
//middleware configuration
//to resolve encoded request when request will come from url formate
app.use(express.urlencoded({extended:true}));
//to convert req body to JSON
app.use(express.json());
//pass app object for using purpuse into router.js file
var sessionMiddleware=expressSession({
    secret:'cart',
    saveUninitialized:true,
    cookie:{maxAge: oneDay},
    resave: false

});
app.use(sessionMiddleware);
//associat views with express
app.set('view engine','ejs');
routes(app);

//listenning port number 7000
app.listen(7000,()=>{
    console.log(' server is listening on port 7000');
});  



