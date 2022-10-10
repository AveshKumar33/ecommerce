import UserController from '../controllers/userControllers.js';
import UserManager from '../services/mysql/usersDal.js';
import AccountController from '../controllers/accountControllers.js';
import AccountManager from '../services/mysql/accountsDal.js';
import CartController from '../controllers/cartControllers.js';
import CartManager from '../services/mysql/cartsDal.js';
import CategoryController from '../controllers/categoryControllers.js';
import CategoryManager from '../services/mysql/categoriesDal.js';
import CustomerController from '../controllers/customerControllers.js';
import CustomerManager from '../services/mysql/customersDal.js';
import DeliveryController from '../controllers/deliveryControllers.js';
import DeliveryManager from '../services/mysql/deliveriesDal.js';
import FeedbackController from '../controllers/feedbackControllers.js';
import FeedbackManager from '../services/mysql/feedbacksDal.js';
import OrderDetailController from '../controllers/orderDetailsControllers.js';
import OrderDetailManager from '../services/mysql/orderDetailsDal.js';
import OrderController from '../controllers/orderControllers.js';
import OrderManager from '../services/mysql/ordersDal.js';
import PaymentController from '../controllers/paymentControllers.js';
import PaymentManager from '../services/mysql/paymentsDal.js';
import ProductController from '../controllers/productControllers.js';
import ProductManager from '../services/mysql/productsDal.js';
import SellerController from '../controllers/sellerControllers.js';
import SellerManager from '../services/mysql/sellersDal.js';
import StaffController from '../controllers/staffControllers.js';
import StaffManager from '../services/mysql/staffsDal.js';
import TransactionController from '../controllers/transactionControllers.js';
import TransactionManager from '../services/mysql/transactionsDal.js';
import VendorController from '../controllers/vendorControllers.js';
import VendorManager from '../services/mysql/vendorsDal.js';
import FundController from '../controllers/fundTransactionControllers.js';
import FundManager from '../services/mysql/fundTransactionDal.js';
import User from '../services/middleware/user.js';


export default function (app) {
   //====================== for vendorss========================================>    
   var mgr = new VendorManager();
   var controller = new VendorController(mgr);
   app.route("/api/vendors")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/vendors/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for transactions========================================>    
   var mgr = new TransactionManager();
   var controller = new TransactionController(mgr);
   app.route("/api/transactions")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/transactions/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for staffs========================================>    
   var mgr = new StaffManager();
   var controller = new StaffController(mgr);
   app.route("/api/staffs")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/staff/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for sellers========================================>    
   var mgr = new SellerManager();
   var controller = new SellerController(mgr);
   app.route("/api/sellers")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/sellers/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for products========================================>    
   var mgr = new ProductManager();
   var controller = new ProductController(mgr);
   app.route("/api/products")
      .get(controller.getAll);

   app.post("/api/products", User, controller.post);

   // .post(controller.post);
   app.route("/api/product/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for payments========================================>    
   var mgr = new PaymentManager();
   var controller = new PaymentController(mgr);
   app.route("/api/payments")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/payments/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for orders========================================>    
   var mgr = new OrderManager();
   var controller = new OrderController(mgr);
   app.route("/api/orders")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/orders/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   // app.route("/api/topTenOrders")
   //    .get(controller.topTenOrders);
   //====================== for orderDetails========================================>    
   var mgr = new OrderDetailManager();
   var controller = new OrderDetailController(mgr);
   app.route("/api/orderDetails")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/orderDetails/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for feedbacks========================================>    
   var mgr = new FeedbackManager();
   var controller = new FeedbackController(mgr);
   app.route("/api/feedbacks")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/feedbacks/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for deliveries========================================>    
   var mgr = new DeliveryManager();
   var controller = new DeliveryController(mgr);
   app.route("/api/deliveries")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/deliveries/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for customers========================================>    
   var mgr = new CustomerManager();
   var controller = new CustomerController(mgr);
   app.route("/api/customers")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/customers/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for categories========================================>    
   var mgr = new CategoryManager();
   var controller = new CategoryController(mgr);
   app.route("/api/categories")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/categories/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for carts========================================>    
   var mgr = new CartManager();
   var controller = new CartController(mgr);
   app.route("/api/carts")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/carts/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);
   //====================== for accounts========================================>    
   var mgr = new AccountManager();
   var controller = new AccountController(mgr);
   app.route("/api/accounts")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/accounts/:id")
      .get(controller.getById)
      .delete(controller.delete)
      .put(controller.put);

   //====================== for users========================================>    
   var mgr = new UserManager();
   var controller = new UserController(mgr);
   app.route("/api/users")
      .get(controller.getAll)
      .post(controller.post);
   app.route("/api/users/:id")
      .get(controller.getById)
      .delete(controller.delete);
   app.route("/api/users/:email")
      .put(controller.put);
   app.route("/api/login")
      .post(controller.login);
   //=================================================================================================
   app.get('/home', User, (req, res, next) => {
      console.log("this is secret route");
      res.send("this is secret route");

   })

   //===============================================================================================
   var mgr = new FundManager();
   var controller = new FundController(mgr);
   app.route("/api/fundTransactions")
      .post(controller.insert);

}

