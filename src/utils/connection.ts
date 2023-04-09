import mongoose, { Model } from 'mongoose';

const { DATABASE_URL } = process.env;

export const connect = async () => {
  const conn = await mongoose
    .connect(DATABASE_URL as string)
    .catch((err) => console.error(err));

  console.log('Mongo Connection success.');

  const UserSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    cellphone: String,
    email: String,
  });

  const User = mongoose.models.User || mongoose.model('User', UserSchema);

  return { conn, User };
};
