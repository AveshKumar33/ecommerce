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
   var vendorMgr = new VendorManager();
   var vendorController = new VendorController(vendorMgr);
   app.route("/api/vendors")
      .get(vendorController.getAll)
      .post(vendorController.post);
   app.route("/api/vendors/:id")
      .get(vendorController.getById)
      .delete(vendorController.delete)
      .put(vendorController.put);
   //====================== for transactions========================================>    
   var transactionMgr = new TransactionManager();
   var transactionController = new TransactionController(transactionMgr);
   app.route("/api/transactions")
      .get(transactionController.getAll)
      .post(transactionController.post);
   app.route("/api/transactions/:id")
      .get(transactionController.getById)
      .delete(transactionController.delete)
      .put(transactionController.put);
   //====================== for staffs========================================>    
   var staffMgr = new StaffManager();
   var staffController = new StaffController(staffMgr);
   app.route("/api/staffs")
      .get(staffController.getAll)
      .post(staffController.post);
   app.route("/api/staff/:id")
      .get(staffController.getById)
      .delete(staffController.delete)
      .put(staffController.put);
   //====================== for sellers========================================>    
   var sellerMgr = new SellerManager();
   var sellerController = new SellerController(sellerMgr);
   app.route("/api/sellers")
      .get(sellerController.getAll)
      .post(sellerController.post);
   app.route("/api/sellers/:id")
      .get(sellerController.getById)
      .delete(sellerController.delete)
      .put(sellerController.put);
   //====================== for products========================================>    
   var productMgr = new ProductManager();
   var productController = new ProductController(productMgr);
   app.route("/api/products")
      .get(productController.getAll);

   app.post("/api/products", User, productController.post);

   // .post(controller.post);
   app.route("/api/product/:id")
      .get(productController.getById)
      .delete(productController.delete)
      .put(productController.put);
   //====================== for payments========================================>    
   var paymentMgr = new PaymentManager();
   var paymentController = new PaymentController(paymentMgr);
   app.route("/api/payments")
      .get(paymentController.getAll)
      .post(paymentController.post);
   app.route("/api/payments/:id")
      .get(paymentController.getById)
      .delete(paymentController.delete)
      .put(paymentController.put);
   //====================== for orders========================================>    
   var orderMgr = new OrderManager();
   var orderController = new OrderController(orderMgr);
   app.route("/api/orders")
      .get(orderController.getAll)
      .post(orderController.post);
   app.route("/api/orders/:id")
      .get(orderController.getById)
      .delete(orderController.delete)
      .put(orderController.put);

   app.route("/api/orders/topten")
      .get(orderController.topTenOrders);
   //====================== for orderDetails========================================>    
   var orderDetailsMgr = new OrderDetailManager();
   var orderDetailsController = new OrderDetailController(orderDetailsMgr);
   app.route("/api/orderDetails")
      .get(orderDetailsController.getAll)
      .post(orderDetailsController.post);
   app.route("/api/orderDetails/:id")
      .get(orderDetailsController.getById)
      .delete(orderDetailsController.delete)
      .put(orderDetailsController.put);
   //====================== for feedbacks========================================>    
   var feedbackMgr = new FeedbackManager();
   var feedbackController = new FeedbackController(feedbackMgr);
   app.route("/api/feedbacks")
      .get(feedbackController.getAll)
      .post(feedbackController.post);
   app.route("/api/feedbacks/:id")
      .get(feedbackController.getById)
      .delete(feedbackController.delete)
      .put(feedbackController.put);
   //====================== for deliveries========================================>    
   var deliveryMgr = new DeliveryManager();
   var deliveryController = new DeliveryController(deliveryMgr);
   app.route("/api/deliveries")
      .get(deliveryController.getAll)
      .post(deliveryController.post);
   app.route("/api/deliveries/:id")
      .get(deliveryController.getById)
      .delete(deliveryController.delete)
      .put(deliveryController.put);
   //====================== for customers========================================>    
   var customerMgr = new CustomerManager();
   var customerController = new CustomerController(customerMgr);
   app.route("/api/customers")
      .get(customerController.getAll)
      .post(customerController.post);
   app.route("/api/customers/:id")
      .get(customerController.getById)
      .delete(customerController.delete)
      .put(customerController.put);
   //====================== for categories========================================>    
   var categoryMgr = new CategoryManager();
   var categoryController = new CategoryController(categoryMgr);
   app.route("/api/categories")
      .get(categoryController.getAll)
      .post(categoryController.post);
   app.route("/api/categories/:id")
      .get(categoryController.getById)
      .delete(categoryController.delete)
      .put(categoryController.put);
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
   var accountMgr = new AccountManager();
   var accountController = new AccountController(accountMgr);
   app.route("/api/accounts")
      .get(accountController.getAll)
      .post(accountController.post);
   app.route("/api/accounts/:id")
      .get(accountController.getById)
      .delete(accountController.delete)
      .put(accountController.put);

   //====================== for users========================================>    
   var managerMgr = new UserManager();
   var managerController = new UserController(managerMgr);
   app.route("/api/users")
      .get(managerController.getAll)
      .post(managerController.post);
   app.route("/api/users/:id")
      .get(managerController.getById)
      .delete(managerController.delete);
   app.route("/api/users/:email")
      .put(managerController.put);
   //============================= for login =========================================>     
   app.route("/api/login")
      .post(managerController.login);
   //=================================================================================================>
   app.get('/home', User, (req, res, next) => {
      console.log("this is secret route");
      res.send("this is secret route");

   })

   //=========================================for fund managerv======================================================>
   var mgr = new FundManager();
   var controller = new FundController(mgr);
   app.route("/api/fundTransactions")
      .post(controller.insert);

}

