
export default class TransactionController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.transactionService = mgr;
    }
  
    showAllTransactions = async (req, res) => {
      let result = await this.transactionService.showAllTransactions();
      res.send(result);
      console.log(result);
    };
  
    showTransactionById = async (req, res) => {
      let result = await this.transactionService.showTransactionById(req);
      res.send(result);
      console.log(result);
    };
  
    registerNewTransaction = async (req, res) => {
      let result = await this.transactionService.insert(req);
      console.log(result);
      res.send(result);
    };
  
    updateTransactionById = async (req, res) => {
      let result = await this.transactionService.update(req);
      console.log(result);
      res.send(result);
    };
  
    removeTransactionById = async (req, res) => {
      console.log(req.body);
      let result = await this.transactionService.removeTransactionById(req);
      console.log(result);
      res.send(result);
    };
  }
  