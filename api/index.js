import express from 'express';
import dotenv from 'dotenv';
import dbConnect from '../config/database.js';
import practicalManagementRoute from '../routes/practicalManagementRoute.js';

// Load environment variables
dotenv.config();

const app = express();

// Connect to the database
dbConnect();

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use("/api/v1", practicalManagementRoute);

// Root route
app.get("/", (req, res) => {
    res.send("Practical Management System");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
});

  


