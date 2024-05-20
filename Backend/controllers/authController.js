const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Labour = require('../models/Labour');

const generateAccessToken = (mobileNumber) => {
  return jwt.sign({ mobileNumber }, 'DKJFHJDFKGHDFKJHSKDHFKJSFJK', { expiresIn: '1h' });
};

exports.login = async (req, res) => {
  const { mobileNumber, password } = req.body;

  try {
    const labour = await Labour.findOne({ mobileNumber });
    if (!labour) {
      return res.status(404).json({ message: 'Labour not found' });
    }

    const isValidPassword = await bcrypt.compare(password, labour.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = generateAccessToken(mobileNumber);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
