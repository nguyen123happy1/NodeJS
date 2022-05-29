import express from 'express';

const userRouter = express.Router();

import { UserSchema } from '../models/User.js';

userRouter.get('/', async (req, res) => {
	try {
		const users = await UserSchema.find();
		res.json(users);
	} catch (err) {
		res.json({ message: error });
	}
});

userRouter.post('/', async (req, res) => {
	const user = new UserSchema({
		username: req.body.username,
		password: req.body.password,
		phone: req.body.phone,
	});
	try {
		const saveUser = await user.save();
		res.json(saveUser);
	} catch (err) {
		res.json({ message: err });
	}
});

userRouter.get('/specific', (req, res) => {
	res.send('We are on specific users');
});

export default userRouter;
