



import subjectModel from '../models/subject.js';
import User from '../models/user.js';

export const createSubject = async (req, res) => {
    try {
        const { Subjectname, code, createdBy } = req.body;

        const user = await User.findById(createdBy);

        if (!user || user.role !== 'Admin') {
            return res.status(403).json({
                error: "Only admins can add subjects."
            });
        }
        const subjectObj = new subjectModel({
            Subjectname,
            code,
            createdBy,
        });

        const savedSubject = await subjectObj.save();


        const SubjectAdded = await User.findByIdAndUpdate(
            createdBy,
            { $push: { subjects: savedSubject._id } }, 
            { new: true }
        )
        .populate("subjects") 
        .exec();

        return res.json({
            message: "Subject created successfully.",
            subject: savedSubject,
            SubjectAdded: SubjectAdded,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: "Error while creating subjects.",
        });
    }
};

export const getAllSubjects=async(req,res)=>{  
    try{  
      const subjectName=await subjectModel.find()  
      res.json({  
        subjectName  
  })  
  }  
  catch(error)  
  {  
  return res.status(400).json({ 
  error:"error while fetching post",  
  })  
  }  
  } 