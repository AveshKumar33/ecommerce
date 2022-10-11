import UserController from '../controllers/userControllers.js';
import UserManager from '../services/mysql/userServices.js';
import AccountController from '../controllers/accountControllers.js';
import AccountManager from '../services/mysql/accountServices.js';
import CartController from '../controllers/cartControllers.js';
import CartManager from '../services/mysql/cartServices.js';
import CategoryController from '../controllers/categoryControllers.js';
import CategoryManager from '../services/mysql/categorieServices.js';
import CustomerController from '../controllers/customerControllers.js';
import CustomerManager from '../services/mysql/customerServices.js';
import DeliveryController from '../controllers/deliveryControllers.js';
import DeliveryManager from '../services/mysql/deliverieServices.js';
import FeedbackController from '../controllers/feedbackControllers.js';
import FeedbackManager from '../services/mysql/feedbackServices.js';
import OrderDetailController from '../controllers/orderDetailsControllers.js';
import OrderDetailManager from '../services/mysql/orderDetailServices.js';
import OrderController from '../controllers/orderControllers.js';
import OrderManager from '../services/mysql/orderServices.js';
import PaymentController from '../controllers/paymentControllers.js';
import PaymentManager from '../services/mysql/paymentServices.js';
import ProductController from '../controllers/productControllers.js';
import ProductManager from '../services/mysql/productServices.js';
import SellerController from '../controllers/sellerControllers.js';
import SellerManager from '../services/mysql/sellerServices.js';
import StaffController from '../controllers/staffControllers.js';
import StaffManager from '../services/mysql/staffServices.js';
import TransactionController from '../controllers/transactionControllers.js';
import TransactionManager from '../services/mysql/transactionServices.js';
import VendorController from '../controllers/vendorControllers.js';
import VendorManager from '../services/mysql/vendorServices.js';
import FundController from '../controllers/fundTransactionControllers.js';
import FundManager from '../services/mysql/fundTransactionServices.js';
import User from '../services/middlewares/user.js';


export default function (app) {
   //====================== for vendorss========================================>    
   var vendorMgr = new VendorManager();
   var vendorController = new VendorController(vendorMgr);
   app.route("/api/vendors")
      .get(vendorController.showAllVendors)
      .post(vendorController.registerNewVendor);
   app.route("/api/vendors/:id")
      .get(vendorController.showVendorById)
      .delete(vendorController.removeVendorById)
      .put(vendorController.updateVendorById);
   //====================== for transactions========================================>    
   var transactionMgr = new TransactionManager();
   var transactionController = new TransactionController(transactionMgr);
   app.route("/api/transactions")
      .get(transactionController.showAllTransactions)
      .post(transactionController.registerNewTransaction);
   app.route("/api/transactions/:id")
      .get(transactionController.showTransactionById)
      .delete(transactionController.removeTransactionById)
      .put(transactionController.updateTransactionById);
   //====================== for staffs========================================>    
   var staffMgr = new StaffManager();
   var staffController = new StaffController(staffMgr);
   app.route("/api/staffs")
      .get(staffController.showAllStaffs)
      .post(staffController.registerNewStaff);
   app.route("/api/staff/:id")
      .get(staffController.showStaffById)
      .delete(staffController.removeStaffById)
      .put(staffController.updateStaffById);
   //====================== for sellers========================================>    
   var sellerMgr = new SellerManager();
   var sellerController = new SellerController(sellerMgr);
   app.route("/api/sellers")
      .get(sellerController.showAllSellers)
      .post(sellerController.registerNewSeller);
   app.route("/api/sellers/:id")
      .get(sellerController.showSellerById)
      .delete(sellerController.removeSellerById)
      .put(sellerController.updateSellerById);
   //====================== for products========================================>    
   var productMgr = new ProductManager();
   var productController = new ProductController(productMgr);
   app.route("/api/products")
      .get(productController.showAllProducts);

   app.post("/api/products", User, productController.registerNewProduct);

   // .post(controller.post);
   app.route("/api/product/:id")
      .get(productController.showProductById)
      .delete(productController.removeProductById)
      .put(productController.updateProductById);
   //====================== for payments========================================>    
   var paymentMgr = new PaymentManager();
   var paymentController = new PaymentController(paymentMgr);
   app.route("/api/payments")
      .get(paymentController.showAllPayments)
      .post(paymentController.registerNewPayment);
   app.route("/api/payments/:id")
      .get(paymentController.showPaymentById)
      .delete(paymentController.removePaymentById)
      .put(paymentController.updatePaymentById);
   //====================== for orders========================================>    
   var orderMgr = new OrderManager();
   var orderController = new OrderController(orderMgr);
   app.route("/api/orders")
      .get(orderController.showAllOrders)
      .post(orderController.registerNewOrder);
   app.route("/api/orders/:id")
      .get(orderController.showOrderById)
      .delete(orderController.removeOrderById)
      .put(orderController.updateOrderById);

   app.route("/api/orders/topten")
      .get(orderController.topTenOrders);
   //====================== for orderDetails========================================>    
   var orderDetailsMgr = new OrderDetailManager();
   var orderDetailsController = new OrderDetailController(orderDetailsMgr);
   app.route("/api/orderDetails")
      .get(orderDetailsController.showAllOrderDetails)
      .post(orderDetailsController.registerNewOrderDetail);
   app.route("/api/orderDetails/:id")
      .get(orderDetailsController.showOrderDetailById)
      .delete(orderDetailsController.removeOrderDetailById)
      .put(orderDetailsController.updateOrderDetailById);
   //====================== for feedbacks========================================>    
   var feedbackMgr = new FeedbackManager();
   var feedbackController = new FeedbackController(feedbackMgr);
   app.route("/api/feedbacks")
      .get(feedbackController.showAllFeedbacks)
      .post(feedbackController.registerNewFeedback);
   app.route("/api/feedbacks/:id")
      .get(feedbackController.showFeedbackById)
      .delete(feedbackController.removeFeedbackById)
      .put(feedbackController.updateFeedbackById);
   //====================== for deliveries========================================>    
   var deliveryMgr = new DeliveryManager();
   var deliveryController = new DeliveryController(deliveryMgr);
   app.route("/api/deliveries")
      .get(deliveryController.showAllDeliveries)
      .post(deliveryController.registerNewDelivery);
   app.route("/api/deliveries/:id")
      .get(deliveryController.showDeliveryById)
      .delete(deliveryController.removeDeliveryById)
      .put(deliveryController.updateDeliveryById);
   //====================== for customers========================================>    
   var customerMgr = new CustomerManager();
   var customerController = new CustomerController(customerMgr);
   app.route("/api/customers")
      .get(customerController.showAllCustomers)
      .post(customerController.registerNewCustomer);
   app.route("/api/customers/:id")
      .get(customerController.showCustomerById)
      .delete(customerController.removeCustomerById)
      .put(customerController.updateCustomerById);
   //====================== for categories========================================>    
   var categoryMgr = new CategoryManager();
   var categoryController = new CategoryController(categoryMgr);
   app.route("/api/categories")
      .get(categoryController.showAllCategories)
      .post(categoryController.registerNewCategory);
   app.route("/api/categories/:id")
      .get(categoryController.showCategoryById)
      .delete(categoryController.removeCategoyById)
      .put(categoryController.updateCategoryById);
   //====================== for carts======== this is : temporary================================>    
   // var mgr = new CartManager();
   // var controller = new CartController(mgr);
   // app.route("/api/carts")
   //    .get(controller.showAll)
   //    .post(controller.registerNewOrderDetail);
   // app.route("/api/carts/:id")
   //    .get(controller.showOrderDetailById)
   //    .delete(controller.removeOrderDetailById)
   //    .put(controller.updateOrderDetailById);
   //====================== for accounts========================================>    
   var accountMgr = new AccountManager();
   var accountController = new AccountController(accountMgr);
   app.route("/api/accounts")
      .get(accountController.showAllAccounts)
      .post(accountController.registerNewAccount);
   app.route("/api/accounts/:id")
      .get(accountController.showAccountById)
      .delete(accountController.removeAccountById)
      .put(accountController.updateAccountById);

   //====================== for users========================================>    
   var managerMgr = new UserManager();
   var managerController = new UserController(managerMgr);
   app.route("/api/users")
      .get(managerController.showAllUsers)
      .post(managerController.registerNewUser);
   app.route("/api/users/:id")
      .get(managerController.showUserById)
      .delete(managerController.removeUserById);
   app.route("/api/users/:email")
      .put(managerController.updateUserById);
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

