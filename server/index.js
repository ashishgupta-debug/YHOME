import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(()=>{
    console.log("Database connected");
})
.catch((err)=> {
    console.log(err);
});
const app = express();

app.use(express.json());

app.use(cookieParser());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/listing', listingRouter);

// add middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});