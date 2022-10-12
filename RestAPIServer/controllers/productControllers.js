
export default class ProductController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.productService = mgr;
  }

  showAllProducts = async (req, res) => {
    let result = await this.productService.showAllProducts();
    res.send(result);
  };

  showProductById = async (req, res) => {
    let result = await this.productService.showProductById(req);
    res.send(result);
    console.log(result);
  };

  registerNewProduct = async (req, res,next) => {
    let result = await this.productService.registerNewProduct(req);
    console.log(result);
    res.send(result);
  };

  updateProductById = async (req, res) => {
    let result = await this.productService.updateProductById(req);
    console.log(result);
    res.send(result);
  };

  removeProductById = async (req, res) => {
    console.log(req.body);
    let result = await this.productService.removeProductById(req);
    console.log(result);
    res.send(result);
  };
}
