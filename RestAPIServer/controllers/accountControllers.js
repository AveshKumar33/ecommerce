
export default class AccountController {
  //constructor Dependency Injection
  constructor(mgr) {
    this.accountService = mgr;
  }

  showAllAccounts = async (req, res) => {
    let result = await this.accountService.showAllAccounts();
    res.send(result);
    console.log(result);
  };

  showAccountById = async (req, res) => {
    let result = await this.accountService.showAccountById(req);
    res.send(result);
    console.log(result);
  };

  registerNewAccount = async (req, res) => {
    let result = await this.accountService.registerNewAccount(req);
    console.log(result);
    res.send(result);
  };

  updateAccountById = async (req, res) => {
    let result = await this.accountService.updateAccountById(req);
    console.log(result);
    res.send(result);
  };

  removeAccountById = async (req, res) => {
    console.log(req.body);
    let result = await this.accountService.removeAccountById(req);
    console.log(result);
    res.send(result);
  };
}
