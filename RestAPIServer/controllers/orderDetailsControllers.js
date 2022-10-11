
export default class OrderDetailController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.dal = mgr;
  }

  getAll = async (req, res) => {
    let result = await this.dal.getAll();
    res.send(result);
    console.log(result);
  };

  getById = async (req, res) => {
    let result = await this.dal.getById(req);
    res.send(result);
    console.log(result);
  };

  post = async (req, res) => {
    let result = await this.dal.insert(req);
    console.log(result);
    res.send(result);
  };

  put = async (req, res) => {
    let result = await this.dal.update(req);
    console.log(result);
    res.send(result);
  };

  delete = async (req, res) => {
    console.log(req.body);
    let result = await this.dal.delete(req);
    console.log(result);
    res.send(result);
  };
}
