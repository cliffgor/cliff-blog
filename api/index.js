import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(
    () => {
        console.log('Database connected');
    })

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);