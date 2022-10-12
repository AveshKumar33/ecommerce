
export default class FundController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.fundTransactionService = mgr;
    }
  
 
    fundTransaction = async (req, res) => {
      let result = await this.fundTransactionService.fundTransaction(req);
      console.log(result);
      res.send('transaction commit successfully');
    };
  

  }
  