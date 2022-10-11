
export default class StaffController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.staffService = mgr;
    }
    showAllStaffs = async (req, res) => {
      let result = await this.staffService.showAllStaffs();
      res.send(result);
      console.log(result);
    };
  
    showStaffById = async (req, res) => {
      let result = await this.staffService.showStaffById(req);
      res.send(result);
      console.log(result);
    };
  
    registerNewStaff = async (req, res) => {
      let result = await this.staffService.registerNewStaff(req);
      console.log(result);
      res.send(result);
    };
  
    updateStaffById = async (req, res) => {
      let result = await this.staffService.updateStaffById(req);
      console.log(result);
      res.send(result);
    };
  
    removeStaffById = async (req, res) => {
      console.log(req.body);
      let result = await this.staffService.removeStaffById(req);
      console.log(result);
      res.send(result);
    };
  }
  