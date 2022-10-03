//this logic is rum on webserver but temprary store here
exports.visitInProduct=(req, res)=>{  
    if(req.session.cart){
       res.send(req.session.cart);
       res.end();
    }
    else{
       req.session.cart=[];
       res.status(200).send(req.session.cart);
       res.end();
   }
};

exports.productAddToCart = (req,res)=>{
   if(req.session.cart){
      let item=req.params.product_id;
      req.session.cart.push(item);
      res.status(200).send(req.session.cart);
      res.end();
   }else{
      res.status(503).send("please visit product ");//503 service  Unavailable
   }
   
};

exports.productRemoveFromCartById=(req,res)=>{ 
   if(req.session.cart){
     req.session.cart=req.session.cart.filter((data)=>(data.id !=req.params.id))
     res.status(200).send(req.session.cart);
    res.end();
   }
   else{
    res.status(503).send('cart is empty');
   }
};

exports.checkout=(req,res)=>{
   req.session.destroy((err)=>{
       res.status(200).send("session has been destroyed ");
       res.end();
   })
};