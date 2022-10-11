
export default class VendorController {
  //constructor Dependency Injection
  constructor(vendorMgr) {
    this.vendorService = vendorMgr;
  }

  showAllVendors = async (req, res) => {
    let result = await this.vendorService.showAllVendors();
    res.send(result);
    //console.log(result);
  };

  showVendorById = async (req, res) => {
    let result = await this.vendorService.showVendorById(req);
    res.send(result);
    //console.log(result);
  };

  registerNewVendor = async (req, res) => {
    let result = await this.vendorService.registerNewVendor(req);
    //console.log(result);
    res.send(result);
  };

  updateVendorById = async (req, res) => {
    let result = await this.vendorService.updateVendorById(req);
   // console.log(result);
    res.send(result);
  };

  removeVendorById = async (req, res) => {
    console.log(req.body);
    let result = await this.vendorService.removeVendorById(req);
   // console.log(result);
    res.send(result);
  };
}
