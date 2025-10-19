const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ status: 0, message: 'No authentication token' });
    }

    const decoded = jwt.verify(token, "secret123"); // Same secret as in Login
    req.user = decoded; // decoded will have { id: userId }
    next();
  } catch (error) {
    res.status(401).json({ status: 0, message: 'Invalid or expired token' });
  }
};

module.exports = {authMiddleware};