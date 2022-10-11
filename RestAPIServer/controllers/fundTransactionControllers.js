
export default class FundController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.dal = mgr;
    }
  
 
    insert = async (req, res) => {
      let result = await this.dal.insert(req);
      console.log(result);
      res.send(result);
    };
  

  }
  