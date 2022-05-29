import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	username: {
		type: String,
		require: true,
	},
	password: {
		type: String,
		require: true,
	},
	phone: {
		type: String,
		require: true,
	},
});

export const UserSchema = mongoose.model('Users', userSchema);
