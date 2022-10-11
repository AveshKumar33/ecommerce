
export default class CategoryController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.categoryService = mgr;
    }
  
    showAllCategories = async (req, res) => {
      let result = await this.categoryService.showAllCategories();
      res.send(result);
      console.log(result);
    };
  
    showCategoryById = async (req, res) => {
      let result = await this.categoryService.showCategoryById(req);
      res.send(result);
      console.log(result);
    };
  
    registerNewCategory = async (req, res) => {
      let result = await this.categoryService.registerNewCategory(req);
      console.log(result);
      res.send(result);
    };
  
    updateCategoryById = async (req, res) => {
      let result = await this.categoryService.updateCategoryById(req);
      console.log(result);
      res.send(result);
    };
  
    removeCategoyById = async (req, res) => {
      console.log(req.body);
      let result = await this.categoryService.removeCategoyById(req);
      console.log(result);
      res.send(result);
    };
  }
  