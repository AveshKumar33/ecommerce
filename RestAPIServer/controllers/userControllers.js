
export default class UserController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.userService = mgr;
    }
  
    showAllUsers = async (req, res) => {
      let result = await this.userService.showAllUsers();
      res.send(result);
      console.log(result);
    };
  
    showUserById = async (req, res) => {
      console.log(req.params.id)
      let result = await this.userService.showUserById(req);
      res.send(result);
      console.log(result);
    };
  
    registerNewUser = async (req, res) => {
      let result = await this.userService.registerNewUser(req);
      console.log(result);
      res.send(result);
    };
  
    updateUserById = async (req, res) => {
      let result = await this.userService.updateUserById(req);
      console.log(result);
      res.send(result);
    };
  
    removeUserById = async (req, res) => {
      console.log(req.body);
      let result = await this.userService.removeUserById(req);
      console.log(result);
      res.send(result);
    };
    login = async (req, res) => {
      let result = await this.userService.login(req);
      console.log(result);
      res.send(result);
    };
  }
  