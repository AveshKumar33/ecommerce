
export default class DeliveryController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.deliveryService = mgr;
  }

  showAllDeliveries = async (req, res) => {
    let result = await this.deliveryService.showAllDeliveries();
    res.send(result);
    console.log(result);
  };

  showDeliveryById = async (req, res) => {
    let result = await this.deliveryService.showDeliveryById(req);
    res.send(result);
    console.log(result);
  };

  registerNewDelivery = async (req, res) => {
    let result = await this.deliveryService.registerNewDelivery(req);
    console.log(result);
    res.send(result);
  };

  updateDeliveryById = async (req, res) => {
    let result = await this.deliveryService.updateDeliveryById(req);
    console.log(result);
    res.send(result);
  };

  removeDeliveryById = async (req, res) => {
    console.log(req.body);
    let result = await this.deliveryService.removeDeliveryById(req);
    console.log(result);
    res.send(result);
  };
}
