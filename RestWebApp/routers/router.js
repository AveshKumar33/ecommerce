import UserController from '../controllers/userControllers.js';
import UserManager from '../services/mysql/usersDal.js';

export default function(app){
//====================== for users========================================>    
   let mgr=new UserManager();
   let controller=new UserController(mgr);  
                app.route("/api/users")
                   .get(controller.getAll)
                   .post(controller.post);
                app.route("/api/users/:id")
                   .get(controller.getById)
                   .delete(controller.delete);
                app.route("/api/users/:email")
                   .put(controller.put);
//=======================for         
}

