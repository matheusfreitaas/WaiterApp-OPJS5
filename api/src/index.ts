import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes';

const dbUrl = 'mongodb://localhost:27017';

mongoose.connect(dbUrl)
  .then(() => {
    const app = express();

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);
    app.listen(3001, () => {
      console.log('server running on localhost:3001');
    });
  })
  .catch(() => console.log('Error while creating server'));
