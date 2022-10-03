var userControllers = require('./controllers/userControllers');
var customerControllers = require('./controllers/customerControllers');
var orderControllers = require('./controllers/orderControllers');
var orderDetailsControllers = require('./controllers/orderDetailsControllers');
var paymentControllers = require('./controllers/paymentControllers');
var productControllers = require('./controllers/productControllers');
var sellerControllers = require('./controllers/sellerControllers');
var vendorControllers = require('./controllers/vendorControllers');

var authController = require('./controllers/authController');
var recController = require('./controllers/recController');

//-------------------------------------------------------------new
var categoryControllers = require("./Controllers/categoryControllers");
var cartController = require('./Controllers/cartController');

//http request mapping is done using routing technique

//-------------------------->for users 
module.exports = function (app) {
       app.route('/api/users')
          .get(userControllers.getAll)
          .post(userControllers.insert)
          .put(userControllers.update);
       app.route('/api/users/:user_id')
          .get(userControllers.getById)
          .delete(userControllers.remove);

//------------------------->for  customers

      app.route('/api/customers')
         .get(customerControllers.getAll)
         .post(customerControllers.insert)
         .put(customerControllers.update);
      app.route('/api/customers/:customer_id')
         .get(customerControllers.getById)
         .delete(customerControllers.remove);

//------------------------->for  orderDetails

      app.route('/api/orderDetails')
         .get(orderDetailsControllers.getAll)
         .post(orderDetailsControllers.insert)
         .put(orderDetailsControllers.update);
      app.route('/api/orderDetails/:order_det_id')
         .get(orderDetailsControllers.getById)
         .delete(orderDetailsControllers.remove);

//--------------------------->for  orders

      app.route('/api/orders')
         .get(orderControllers.getAll)
         .post(orderControllers.insert)
         .put(orderControllers.update);
      app.route('/api/orders/:id')
         .get(orderControllers.getById)
         .delete(orderControllers.remove);

//--------------------------->for  payments

       app.route('/api/payments')
          .get(paymentControllers.getAll)
          .post(paymentControllers.insert)
          .put(paymentControllers.update);
       app.route('/api/payments/:payment_id')
          .get(paymentControllers.getById)
          .delete(paymentControllers.remove);
 
//--------------------------->for  products
 
         app.route('/api/products')
            .get(productControllers.getAll)
            .post(productControllers.insert)
            .put(productControllers.update);
         app.route('/api/products/:id')
            .get(productControllers.getById)
            .delete(productControllers.remove);

//--------------------------->for  sellers
 
         app.route('/api/sellers')
            .get(sellerControllers.getAll)
            .post(sellerControllers.insert)
            .put(sellerControllers.update);
         app.route('/api/sellers/:id')
            .get(sellerControllers.getById)
            .delete(sellerControllers.remove);
//--------------------------->for  vendors
  
        app.route('/api/vendors')
           .get(vendorControllers.getAll)
           .post(vendorControllers.insert)
           .put(vendorControllers.update);
        app.route('/api/vendors/:id')
           .get(vendorControllers.getById)
           .delete(vendorControllers.remove);

//--------------------------->for  categories
  
       app.route('/api/categories')
          .get(categoryControllers.getAll)
          .post(categoryControllers.insert)
          .put(categoryControllers.update);
       app.route('/api/vendors/:id')
          .get(categoryControllers.getById)
          .delete(categoryControllers.remove);


//------------------------------>for carts
//this logic is rum on webserver but temprary store here
         app.route('/api/cart')
            .get(cartController.visitInProduct);
         app.route('/api/cart/:id')
           .post(cartController.productAddToCart)
           .delete(cartController.productRemoveFromCartById)
        app.route('/api/cart/destroy')
           .delete(cartController.checkout)

           
//------------------------------------>

        app.route('/api/welcome')
            .get(recController.welcome);
        app.route('/api/hello')
            .get(recController.hello);

       app.route('/api/login')
           .post(authController.login);
       app.route('/api/register')
           .post(authController.register);


//-------------------------------------------------------


                 

    









}