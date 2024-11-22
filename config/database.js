import mongoose from 'mongoose';

const dbConnect = () => {
    const mongoURI = process.env.MONGODB_URL;

    if (!mongoURI) {
        console.error("MongoDB URL is not defined in the environment variables.");
        process.exit(1);
    }

    mongoose.connect(mongoURI, {
      
    })
    .then(() => {
        console.log("DB connected successfully");
    })
    .catch((error) => {
        console.error("DB connection failed:", error.message);
        process.exit(1); // Exit the process with failure
    });
};

export default dbConnect;
