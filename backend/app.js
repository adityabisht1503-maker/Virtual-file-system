const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {Router} = require('./routes/Router');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', Router);

try {
  mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("connected to the database");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port http://localhost:${process.env.PORT}`);
    });
  }).catch((err) => {
    console.error("Database connection error:", err);
  });
} catch (err) {
  console.error("Connection error:", err);
}
  