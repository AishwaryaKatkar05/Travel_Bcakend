const Tour = require('../models/Tour');

exports.createTour = async (req, res) => {
  try {
    const { title, description, price, date } = req.body;
    const tour = new Tour({ title, description, price, date, image: req.file?.filename });
    await tour.save();
    res.json(tour);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};