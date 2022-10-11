
export default class FundController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.fundTransactionService = mgr;
    }
  
 
    insert = async (req, res) => {
      let result = await this.fundTransactionService.insert(req);
      console.log(result);
      res.send(result);
    };
  

  }
  