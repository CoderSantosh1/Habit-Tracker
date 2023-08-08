const mongoose= require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://Santosh11:8YRLpZqiQi4thAXk@cluster0.rn8iopr.mongodb.net/?retryWrites=true&w=majority');
    console.log(`Connected To  Mongo Database  ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in connecting to the database`, error.message);
  }
};

 module.exports = connectDB;