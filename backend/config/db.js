const mongoose = require('mongoose')

// mongodb database kısmına bağlanma işlemi

const connectDB  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Successfully connected to database")
      } catch (error) {
        throw error;
      }
}

module.exports = connectDB 