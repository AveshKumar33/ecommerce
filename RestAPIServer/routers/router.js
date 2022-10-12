import UserController from '../controllers/userControllers.js';
import UserService from '../services/mysql/userServices.js';

import AccountController from '../controllers/accountControllers.js';
import AccountService from '../services/mysql/accountServices.js';

//import CartController from '../controllers/cartControllers.js';
//import CartManager from '../services/mysql/cartServices.js';

import CategoryController from '../controllers/categoryControllers.js';
import CategoryService from '../services/mysql/categorieServices.js';

import CustomerController from '../controllers/customerControllers.js';
import CustomerService from '../services/mysql/customerServices.js';

import DeliveryController from '../controllers/deliveryControllers.js';
import DeliveryService from '../services/mysql/deliverieServices.js';

import FeedbackController from '../controllers/feedbackControllers.js';
import FeedbackService from '../services/mysql/feedbackServices.js';

import OrderDetailController from '../controllers/orderDetailsControllers.js';
import OrderDetailService from '../services/mysql/orderDetailServices.js';

import OrderController from '../controllers/orderControllers.js';
import OrderService from '../services/mysql/orderServices.js';

import PaymentController from '../controllers/paymentControllers.js';
import PaymentService from '../services/mysql/paymentServices.js';

import ProductController from '../controllers/productControllers.js';
import ProductService from '../services/mysql/productServices.js';

import SellerController from '../controllers/sellerControllers.js';
import SellerService from '../services/mysql/sellerServices.js';

import StaffController from '../controllers/staffControllers.js';
import StaffService from '../services/mysql/staffServices.js';

import TransactionController from '../controllers/transactionControllers.js';
import TransactionService from '../services/mysql/transactionServices.js';

import VendorController from '../controllers/vendorControllers.js';
import VendorService from '../services/mysql/vendorServices.js';

import FundController from '../controllers/fundTransactionControllers.js';
import FundTransactionService from '../services/mysql/fundTransactionServices.js';

import DashboardController from '../controllers/dashboard/dashboardControllers.js';
import DashboardService from '../services/mysql/dashboardServices.js';

import User from '../services/middlewares/user.js';


export default function (app) {
   //==========================for  my dashboards===============================================================>
   var dashboardMgr = new DashboardService();
   var dashboardController = new DashboardController(dashboardMgr);

   app.route("/api/orders/topten")
      .get(dashboardController.topTenOrders);
   app.route("/api/customers/topten")
      .get(dashboardController.topTenCustomers);
   app.route("/api/sellers/topten")
      .get(dashboardController.topTenSellers);
   app.route("/api/vendors/topten")
      .get(dashboardController.topTenVendors);
   app.route("/api/products/topten")
      .get(dashboardController.topTenProducts);
   app.route("/api/orders/status")
      .get(dashboardController.orderstatus);
   app.route("/api/products/availableproducts")
      .get(dashboardController.availableProducts);
   app.route("/api/products/unavailableproducts")
      .get(dashboardController.unavailableProducts);
   app.route("/api/products/productsbycategory")
      .get(dashboardController.productByCategoryName);
   app.route("/api/products/countproductincatalog")
      .get(dashboardController.productCountOfEachCategory);
   app.route("/api/customers/profile")
      .get(dashboardController.customerProfile);
   app.route("/api/vendors/profile")
      .get(dashboardController.vendorProfile);
   app.route("/api/sellers/profile")
      .get(dashboardController.sellerProfile);
   app.route("/api/staff/profile")
      .get(dashboardController.staffProfile);

   //====================== for vendorss========================================>    
   var vendorMgr = new VendorService();
   var vendorController = new VendorController(vendorMgr);
   app.route("/api/vendors")
      .get(vendorController.showAllVendors)
      .post(vendorController.registerNewVendor);
   app.route("/api/vendors/:id")
      .get(vendorController.showVendorById)
      .delete(vendorController.removeVendorById)
      .put(vendorController.updateVendorById);
   //====================== for transactions========================================>    
   var transactionMgr = new TransactionService();
   var transactionController = new TransactionController(transactionMgr);
   app.route("/api/transactions")
      .get(transactionController.showAllTransactions)
      .post(transactionController.registerNewTransaction);
   app.route("/api/transactions/:id")
      .get(transactionController.showTransactionById)
      .delete(transactionController.removeTransactionById)
      .put(transactionController.updateTransactionById);
   //====================== for staffs========================================>    
   var staffMgr = new StaffService();
   var staffController = new StaffController(staffMgr);
   app.route("/api/staffs")
      .get(staffController.showAllStaffs)
      .post(staffController.registerNewStaff);
   app.route("/api/staff/:id")
      .get(staffController.showStaffById)
      .delete(staffController.removeStaffById)
      .put(staffController.updateStaffById);
   //====================== for sellers========================================>    
   var sellerMgr = new SellerService();
   var sellerController = new SellerController(sellerMgr);
   app.route("/api/sellers")
      .get(sellerController.showAllSellers)
      .post(sellerController.registerNewSeller);
   app.route("/api/sellers/:id")
      .get(sellerController.showSellerById)
      .delete(sellerController.removeSellerById)
      .put(sellerController.updateSellerById);
   //====================== for products========================================>    
   var productMgr = new ProductService();
   var productController = new ProductController(productMgr);
   app.route("/api/products")
      .get(productController.showAllProducts);

   app.post("/api/products", User, productController.registerNewProduct);
   
   app.route("/api/product/:id")
      .get(productController.showProductById)
      .delete(productController.removeProductById)
      .put(productController.updateProductById);
   //====================== for payments========================================>    
   var paymentMgr = new PaymentService();
   var paymentController = new PaymentController(paymentMgr);
   app.route("/api/payments")
      .get(paymentController.showAllPayments)
      .post(paymentController.registerNewPayment);
   app.route("/api/payments/:id")
      .get(paymentController.showPaymentById)
      .delete(paymentController.removePaymentById)
      .put(paymentController.updatePaymentById);
   //====================== for orders========================================>    
   var orderMgr = new OrderService();
   var orderController = new OrderController(orderMgr);
   app.route("/api/orders")
      .get(orderController.showAllOrders)
      .post(orderController.registerNewOrder);
   app.route("/api/orders/:id")
      .get(orderController.showOrderById)
      .delete(orderController.removeOrderById)
      .put(orderController.updateOrderById);
   //====================== for orderDetails========================================>    
   var orderDetailsMgr = new OrderDetailService();
   var orderDetailsController = new OrderDetailController(orderDetailsMgr);
   app.route("/api/orderDetails")
      .get(orderDetailsController.showAllOrderDetails)
      .post(orderDetailsController.registerNewOrderDetail);
   app.route("/api/orderDetails/:id")
      .get(orderDetailsController.showOrderDetailById)
      .delete(orderDetailsController.removeOrderDetailById)
      .put(orderDetailsController.updateOrderDetailById);
   //====================== for feedbacks========================================>    
   var feedbackMgr = new FeedbackService();
   var feedbackController = new FeedbackController(feedbackMgr);
   app.route("/api/feedbacks")
      .get(feedbackController.showAllFeedbacks)
      .post(feedbackController.registerNewFeedback);
   app.route("/api/feedbacks/:id")
      .get(feedbackController.showFeedbackById)
      .delete(feedbackController.removeFeedbackById)
      .put(feedbackController.updateFeedbackById);
   //====================== for deliveries========================================>    
   var deliveryMgr = new DeliveryService();
   var deliveryController = new DeliveryController(deliveryMgr);
   app.route("/api/deliveries")
      .get(deliveryController.showAllDeliveries)
      .post(deliveryController.registerNewDelivery);
   app.route("/api/deliveries/:id")
      .get(deliveryController.showDeliveryById)
      .delete(deliveryController.removeDeliveryById)
      .put(deliveryController.updateDeliveryById);
   //====================== for customers========================================>    
   var customerMgr = new CustomerService();
   var customerController = new CustomerController(customerMgr);
   app.route("/api/customers")
      .get(customerController.showAllCustomers)
      .post(customerController.registerNewCustomer);
   app.route("/api/customers/:id")
      .get(customerController.showCustomerById)
      .delete(customerController.removeCustomerById)
      .put(customerController.updateCustomerById);
   //====================== for categories========================================>    
   var categoryMgr = new CategoryService();
   var categoryController = new CategoryController(categoryMgr);
   app.route("/api/categories")
      .get(categoryController.showAllCategories)
      .post(categoryController.registerNewCategory);
   app.route("/api/categories/:id")
      .get(categoryController.showCategoryById)
      .delete(categoryController.removeCategoyById)
      .put(categoryController.updateCategoryById);
   //====================== for carts======== this is : temporary store here================================>    
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
   var accountMgr = new AccountService();
   var accountController = new AccountController(accountMgr);
   app.route("/api/accounts")
      .get(accountController.showAllAccounts)
      .post(accountController.registerNewAccount);
   app.route("/api/accounts/:id")
      .get(accountController.showAccountById)
      .delete(accountController.removeAccountById)
      .put(accountController.updateAccountById);

   //====================== for users========================================>    
   var userMgr = new UserService();
   var userController = new UserController(userMgr);
   app.route("/api/users")
      .get(userController.showAllUsers)
      .post(userController.registerNewUser);
   app.route("/api/users/:id")
      .get(userController.showUserById)
      .delete(userController.removeUserById);
   app.route("/api/users/:email")
      .put(userController.updateUserById);
   //============================= for login =========================================>     
   app.route("/api/login")
      .post(userController.login);
   //=================================================================================================>
   app.get('/home', User, (req, res, next) => {
      console.log("this is secret route");
      res.send("this is secret route");
   })

   //=========================================for fund managerv======================================================>
   var fundTransactionmgr = new FundTransactionService();
   var fundTransactioncontroller = new FundController(fundTransactionmgr);
   app.route("/api/fundtransactions")
      .post(fundTransactioncontroller.fundTransaction);

}

