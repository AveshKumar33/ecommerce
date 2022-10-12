import jwt  from "jsonwebtoken";

 export default function isLoggedIn (req, res, next)  {
    try {
      const token = req.headers.authorization;
      console.log(token+"======avesh");
      const decoded = jwt.verify(
        token,
        'SECRET'
      );
      res.send(decoded);
      next();
    } catch (err) {
      return res.status(401).send({
        msg: 'You not authorized! person?'
      });
    }
  }