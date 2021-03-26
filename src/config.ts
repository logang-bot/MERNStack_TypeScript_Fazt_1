import dotenv from "dotenv";
dotenv.config();
// console.log(process.env.HELLO);
// console.log("dfas");

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mernDatabase",
  MONGO_USER: process.env.MONGO_USER || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
  MONGO_HOST: process.env.MONGO_HOST || "172.20.0.2:27017",
  PORT: process.env.PORT || 8000,
  // MONGO_HOST: 'localhost'
};
