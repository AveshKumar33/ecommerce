// NOTE this is : temporary here
export default class CartController {
   //constructor Dependency Injection
   constructor(mgr) {
     this.cartService = mgr;
   }
 
   getAll = async (req, res) => {
     let result = await this.cartService.getAll();
     res.send(result);
     console.log(result);
   };
 
   getById = async (req, res) => {
     let result = await this.cartService.getById(req);
     res.send(result);
     console.log(result);
   };
 
   post = async (req, res) => {
     let result = await this.cartService.insert(req);
     console.log(result);
     res.send(result);
   };
 
   put = async (req, res) => {
     let result = await this.cartService.update(req);
     console.log(result);
     res.send(result);
   };
 
   delete = async (req, res) => {
     console.log(req.body);
     let result = await this.cartService.delete(req);
     console.log(result);
     res.send(result);
   };
 }



