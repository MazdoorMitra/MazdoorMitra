const Labour = require('../models/Labour');

exports.register = async (req, res) => {
  const { name, mobileNumber, jobType, password } = req.body;

  try {
    const existingLabour = await Labour.findOne({ mobileNumber });
    if (existingLabour) {
      return res.status(400).json({ message: 'Mobile number already registered' });
    }

    const labour = new Labour({ name, mobileNumber, jobType, password });
    await labour.save();

    res.status(201).json({ message: 'Labour registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.getLabourData = async (req, res) => {
  try {
    const labourData = await Labour.find();
    res.json(labourData);
  } catch (error) {
    console.error('Error fetching labour data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};





