const jwt = require('jsonwebtoken');
const config = require('../config/config');
const staff = require('../data/staffs.json');

exports.login = (req, res) => {
console.log('Login request body:', req.body);
  const { email, password } = req.body;
  const user = staff.find(u => u.email === email && u.password === password);

  console.log('Found user:', user);
  
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    config.JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  res.json({ token });
};

exports.logout = (req, res) => {
  res.json({ message: 'Logout successful' });
};