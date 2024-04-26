import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://sharma08462:R9IEtl23InFVfLUM@cluster0.w4fa77w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(
        console.log('DB connected')
    )
}