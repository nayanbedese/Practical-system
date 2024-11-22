import mongoose from 'mongoose';
const practicalSchema=new mongoose.Schema({
        subjectId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Subject', 
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', 
          required: true,
        },
      });
      

const practicalModel=mongoose.model("Practical",practicalSchema);
export default practicalModel;