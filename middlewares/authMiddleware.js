const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Authentication required' });

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

exports.isSuperAdmin = (req, res, next) => {
  if (req.user.role !== 'superAdmin') 
    return res.status(403).json({ message: 'Forbidden' });
  next();
};