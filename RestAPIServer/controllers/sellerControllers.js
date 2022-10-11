
export default class SellerController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.sellerService = mgr;
  }

  showAllSellers = async (req, res) => {
    let result = await this.sellerService.showAllSellers();
    res.send(result);
    console.log(result);
  };

  showSellerById = async (req, res) => {
    let result = await this.sellerService.showSellerById(req);
    res.send(result);
    console.log(result);
  };

  registerNewSeller = async (req, res) => {
    let result = await this.sellerService.registerNewSeller(req);
    console.log(result);
    res.send(result);
  };

  updateSellerById = async (req, res) => {
    let result = await this.sellerService.updateSellerById(req);
    console.log(result);
    res.send(result);
  };

  removeSellerById = async (req, res) => {
    console.log(req.body);
    let result = await this.sellerService.removeSellerById(req);
    console.log(result);
    res.send(result);
  };
}
