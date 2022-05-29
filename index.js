import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import userRouter from './routes/users.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const URI = process.env.DB_CONNECTION;
mongoose.connect(URI, (err, db) => {
	console.log('Connected to database');
});

app.use('/users', userRouter);

app.get('/', (req, res) => {
	res.json({ users: ['user1', 'user2'] });
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.status(201).send('Create user');
});

app.listen(5000, () => {
	console.log('Started on port 5000');
});
