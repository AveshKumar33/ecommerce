
export default class FeedbackController {
    //constructor Dependency Injection
    constructor(mgr) {
      this.feedbackService = mgr;
    }
  
    showAllFeedbacks = async (req, res) => {
      let result = await this.feedbackService.showAllFeedbacks();
      res.send(result);
      console.log(result);
    };
  
    showFeedbackById = async (req, res) => {
      let result = await this.feedbackService.showFeedbackById(req);
      res.send(result);
      console.log(result);
    };
  
    registerNewFeedback = async (req, res) => {
      let result = await this.feedbackService.registerNewFeedback(req);
      console.log(result);
      res.send(result);
    };
  
    updateFeedbackById = async (req, res) => {
      let result = await this.feedbackService.updateFeedbackById(req);
      console.log(result);
      res.send(result);
    };
  
    removeFeedbackById = async (req, res) => {
      console.log(req.body);
      let result = await this.feedbackService.removeFeedbackById(req);
      console.log(result);
      res.send(result);
    };
  }
  