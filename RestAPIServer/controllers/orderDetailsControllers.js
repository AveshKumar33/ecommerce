
export default class OrderDetailController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.orderDetailService = mgr;
  }

  showAllOrderDetails = async (req, res) => {
    let result = await this.orderDetailService.showAllOrderDetails();
    res.send(result);
    console.log(result);
  };

  showOrderDetailById = async (req, res) => {
    let result = await this.orderDetailService.showOrderDetailById(req);
    res.send(result);
    console.log(result);
  };

  registerNewOrderDetail = async (req, res) => {
    let result = await this.orderDetailService.registerNewOrderDetail(req);
    console.log(result);
    res.send(result);
  };

  updateOrderDetailById = async (req, res) => {
    let result = await this.orderDetailService.updateOrderDetailById(req);
    console.log(result);
    res.send(result);
  };

  removeOrderDetailById = async (req, res) => {
    console.log(req.body);
    let result = await this.orderDetailService.removeOrderDetailById(req);
    console.log(result);
    res.send(result);
  };
}
