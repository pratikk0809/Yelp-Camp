// Run this as a separate script or in your seed file
const mongoose = require('mongoose');
const Campground = require('./models/campground');


mongoose.connect('mongodb://localhost:27017/yelp-camp');

const updateCampgrounds = async () => {
  const campgrounds = await Campground.find({});
  for (let camp of campgrounds) {
    // Set default coordinates or use a geocoding service for real locations
    camp.geometry = {
      type: 'Point',
      coordinates: [-80.207, 26.244] // Example: Margate, Florida
    };
    await camp.save();
  }
  mongoose.connection.close();
};

updateCampgrounds();