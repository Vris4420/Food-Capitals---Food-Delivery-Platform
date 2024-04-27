import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";


// confi
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

//API endpoint
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))

app.get("/", (req,res) => {
    res.send("Api working")
})


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})