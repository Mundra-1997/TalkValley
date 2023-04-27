const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const adsRouter = require('./routes/ad');
const csRouter = require('./routes/create')
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));


app.use('/api/ads', adsRouter);
app.use('/api/create',csRouter);
app.listen(5000, () => console.log('Server started on port 5000'));