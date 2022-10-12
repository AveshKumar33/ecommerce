
export default class OrderController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.orderService = mgr;
  }

  showAllOrders = async (req, res) => {
    let result = await this.orderService.showAllOrders();
    res.send(result);
    console.log(result);
  };

  showOrderById = async (req, res) => {
    let result = await this.orderService.showOrderById(req);
    res.send(result);
    console.log(result);
  };

  registerNewOrder = async (req, res) => {
    let result = await this.orderService.registerNewOrder(req);
    console.log(result);
    res.send(result);
  };

  updateOrderById = async (req, res) => {
    let result = await this.orderService.updateOrderById(req);
    console.log(result);
    res.send(result);
  };

  removeOrderById = async (req, res) => {
    console.log(req.body);
    let result = await this.orderService.removeOrderById(req);
    console.log(result);
    res.send(result);
  };

}
