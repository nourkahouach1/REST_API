const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { family: 4 });
    console.log("DataBase connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
