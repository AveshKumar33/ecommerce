import jwt  from "jsonwebtoken";



// module.exports = function(req, res, next) {
//   //get the token from the header if present
//   const token = req.headers["x-access-token"] || req.headers["authorization"];
//   //if no token found, return response (without going to the next middelware)
//   if (!token) return res.status(401).send("Access denied. No token provided.");

//   try {
//     //if can verify the token, set req.user and pass to next middleware
//     const decoded = jwt.verify(token,  'SECRET');
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     //if invalid token
//     res.status(400).send("Invalid token.");
//   }
// };
//module.export = {
    // middleware/users.js
    

 export default function isLoggedIn (req, res, next)  {
    try {
      const token = req.headers.authorization.split(' ')[1];
      console.log(token+"======ecvgbhnjmkxcvg");
      const decoded = jwt.verify(
        token,
        'SECRET'
      );
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: 'Your session is not valid!'
      });
    }
  }