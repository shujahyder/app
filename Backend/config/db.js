const mongoose = require('mongoose');

const MONGOURI = process.env.MONGO_URI


const connectMONGODB = async() => {
try {
    await mongoose.connect(MONGOURI)
    console.log('mongodb connected')
} catch (error) {
    console.log("error connecting mongodb: " + error.message);
}
}

module.exports = connectMONGODB;