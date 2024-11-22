
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Teachers', 'Students'],
    required: true,
  },
 
  practicals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Practical',
    },
  ],
});

const userModel = mongoose.model('User', userSchema);
export default userModel;