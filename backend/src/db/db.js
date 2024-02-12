const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://prathmeshdupare:prathmeshdupare@cluster0.mkf7yzn.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error Connecting with Database");
    console.log(error);
  }
};

module.exports = connectDB;
