
export default class PaymentController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.paymentService = mgr;
  }

  showAllPayments = async (req, res) => {
    let result = await this.paymentService.showAllPayments();
    res.send(result);
    console.log(result);
  };

  showPaymentById = async (req, res) => {
    let result = await this.paymentService.showPaymentById(req);
    res.send(result);
    console.log(result);
  };

  registerNewPayment = async (req, res) => {
    let result = await this.paymentService.registerNewPayment(req);
    console.log(result);
    res.send(result);
  };

  updatePaymentById = async (req, res) => {
    let result = await this.paymentService.updatePaymentById(req);
    console.log(result);
    res.send(result);
  };

  removePaymentById = async (req, res) => {
    console.log(req.body);
    let result = await this.paymentService.removePaymentById(req);
    console.log(result);
    res.send(result);
  };
 
}
