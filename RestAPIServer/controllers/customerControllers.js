
export default class CustomerController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.customerService = mgr;
  }

  showAllCustomers = async (req, res) => {
    let result = await this.customerService.showAllCustomers();
    res.send(result);
    console.log(result);
  };

  showCustomerById = async (req, res) => {
    let result = await this.customerService.showCustomerById(req);
    res.send(result);
    console.log(result);
  };

  registerNewCustomer = async (req, res) => {
    let result = await this.customerService.registerNewCustomer(req);
    console.log(result);
    res.send(result);
  };

  updateCustomerById = async (req, res) => {
    let result = await this.customerService.updateCustomerById(req);
    console.log(result);
    res.send(result);
  };

  removeCustomerById = async (req, res) => {
    console.log(req.body);
    let result = await this.customerService.removeCustomerById(req);
    console.log(result);
    res.send(result);
  };
}
