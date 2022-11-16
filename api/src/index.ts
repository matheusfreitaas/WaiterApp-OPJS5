import express from 'express';
import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017';

mongoose.connect(dbUrl)
  .then(() => {
    const app = express();
    app.listen(3001, () => {
      console.log('server running on localhost:3001');
    });
  })
  .catch(() => console.log('Error while creating server'));
