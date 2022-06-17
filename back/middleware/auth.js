const jwt = require('jsonwebtoken');

module.exports = {
  auth: (req, res, next) => {
    try {
      const userId = getUserIdFromToken(req);
      if (req.body.userId && req.body.userId !== userId) {
        throw 'Invalid user ID';
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Invalid request!'),
      });
    }
  },
  getUserIdFromToken: (req) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken.userId;
  },
};
