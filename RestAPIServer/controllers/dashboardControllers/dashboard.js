var dal = require('../models/dashboarddDal');
//public business scenanio
exports.getOrderList = async (req, res) => {//get all orders
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.getOrderList();
  res.send(results);
};

exports.getAvailableProducts = async (req, res) => {//get all products
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.getAvailableProducts();
  res.send(results);
};

exports.getUserDetails = async (req, res) => {//get all users
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.getUserDetails();
  res.send(results);
};

exports.getCustomerOrders = async (req, res) => {
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.getCustomerOrders();
  res.send(results);
};

exports.getCustomerpayments = async (req, res) => {//inheritence concept 
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.getCustomerpayments();
  res.send(results);
};

exports.getAllProductDetails = async (req, res) => {//get all products
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.getAllProductDetails();
  res.send(results);
};
//public business scenanio
exports.updateExistsProductDetails = async (req, res) => {//put exits products
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.updateExistsProductDetails();
  res.send(results);
};

exports.removeExistsProductfromCategory = async (req, res) => {
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.removeExistsProductfromCategory();
  res.send(results);
};
exports.orderStatus = async (req, res) => { //get order 
  let results = [];
  //here dal.js file getAll method is calling
  results = await dal.orderStatus();
  res.send(results);
};



exports.getCategoryList = async (req, res) => {//get all category
  let data = [];
  data = await dal.getCategoryList();
  res.send(data);
};

exports.getCustomerProfile = async (req, res) => {//get all customer
  let data = [];
  data = await dal.getCustomerPersonalProfile(req.params.id);
  res.send(data);
};

exports.getSellerProfile = async (req, res) => {//get all sellers
  let data = [];
  data = await dal.getSellerPersonalInfo();
  res.send(data);
};

exports.getSellerProducts = async (req, res) => {
  let data = [];
  data = await dal.getSellerProducts(req.params.id);
  res.send(data);
};

exports.getSellerOrders = async (req, res) => {
  let data = [];
  data = await dal.getSellerOrders(req.params.id);
  res.send(data);
};

exports.getStaffInfo = async (req, res) => {//get all staffs
  let data = [];
  data = await dal.getStaffPersonalInfo();
  res.send(data);
};

exports.getVendorsInfo = async (req, res) => {//get all vendor
  let data = [];
  data = await dal.getVendorPersonalInfo();
  res.send(data);
};
