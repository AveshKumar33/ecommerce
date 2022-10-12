export default class DashboardController {
  constructor(mgr) {
    this.dashboardService = mgr;
  }


  topTenOrders = async (req, res) => {
    let result = await this.dashboardService.topTenOrders();
    res.send(result);
    console.log(result);
  };
  topTenCustomers = async (req, res) => {
    let result = await this.dashboardService.topTenCustomers();
    res.send(result);
    console.log(result);
  };
  topTenSellers = async (req, res) => {
    let result = await this.dashboardService.topTenSellers();
    res.send(result);
    console.log(result);
  };
  topTenVendors = async (req, res) => {
    let result = await this.dashboardService.topTenVendors();
    res.send(result);
    console.log(result);
  };
  topTenProducts = async (req, res) => {
    let result = await this.dashboardService.topTenProducts();
    res.send(result);
    console.log(result);
  };
  orderstatus = async (req, res) => {
    let result = await this.dashboardService.orderstatus();
    res.send(result);
    console.log(result);
  };
  availableProducts = async (req, res) => {
    let result = await this.dashboardService.availableProducts();
    res.send(result);
    console.log(result);
  };
  unavailableProducts = async (req, res) => {
    let result = await this.dashboardService.unavailableProducts();
    res.send(result);
    console.log(result);
  };
  productByCategoryName = async (req, res) => {
    let result = await this.dashboardService.productByCategoryName();
    res.send(result);
    console.log(result);
  };
  productCountOfEachCategory = async (req, res) => {
    let result = await this.dashboardService.productCountOfEachCategory();
    res.send(result);
    console.log(result);
  };
  customerProfile = async (req, res) => {
    let result = await this.dashboardService.customerProfile();
    res.send(result);
    console.log(result);
  };
  vendorProfile = async (req, res) => {
    let result = await this.dashboardService.vendorProfile();
    res.send(result);
    console.log(result);
  };
  sellerProfile = async (req, res) => {
    let result = await this.dashboardService.sellerProfile();
    res.send(result);
    console.log(result);
  };
  staffProfile = async (req, res) => {
    let result = await this.dashboardService.staffProfile();
    res.send(result);
    console.log(result);
  };
}


































// var dal = require('../models/dashboarddDal');
// //public business scenanio
// exports.getOrderList = async (req, res) => {//get all orders
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.getOrderList();
//   res.send(results);
// };

// exports.getAvailableProducts = async (req, res) => {//get all products
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.getAvailableProducts();
//   res.send(results);
// };

// exports.getUserDetails = async (req, res) => {//get all users
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.getUserDetails();
//   res.send(results);
// };

// exports.getCustomerOrders = async (req, res) => {
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.getCustomerOrders();
//   res.send(results);
// };

// exports.getCustomerpayments = async (req, res) => {//inheritence concept 
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.getCustomerpayments();
//   res.send(results);
// };

// exports.getAllProductDetails = async (req, res) => {//get all products
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.getAllProductDetails();
//   res.send(results);
// };
// //public business scenanio
// exports.updateExistsProductDetails = async (req, res) => {//put exits products
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.updateExistsProductDetails();
//   res.send(results);
// };

// exports.removeExistsProductfromCategory = async (req, res) => {
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.removeExistsProductfromCategory();
//   res.send(results);
// };
// exports.orderStatus = async (req, res) => { //get order 
//   let results = [];
//   //here dal.js file getAll method is calling
//   results = await dal.orderStatus();
//   res.send(results);
// };



// exports.getCategoryList = async (req, res) => {//get all category
//   let data = [];
//   data = await dal.getCategoryList();
//   res.send(data);
// };

// exports.getCustomerProfile = async (req, res) => {//get all customer
//   let data = [];
//   data = await dal.getCustomerPersonalProfile(req.params.id);
//   res.send(data);
// };

// exports.getSellerProfile = async (req, res) => {//get all sellers
//   let data = [];
//   data = await dal.getSellerPersonalInfo();
//   res.send(data);
// };

// exports.getSellerProducts = async (req, res) => {
//   let data = [];
//   data = await dal.getSellerProducts(req.params.id);
//   res.send(data);
// };

// exports.getSellerOrders = async (req, res) => {
//   let data = [];
//   data = await dal.getSellerOrders(req.params.id);
//   res.send(data);
// };

// exports.getStaffInfo = async (req, res) => {//get all staffs
//   let data = [];
//   data = await dal.getStaffPersonalInfo();
//   res.send(data);
// };

// exports.getVendorsInfo = async (req, res) => {//get all vendor
//   let data = [];
//   data = await dal.getVendorPersonalInfo();
//   res.send(data);
// };
