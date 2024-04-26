import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";


// confi
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cors())

//DB connection
connectDB();

app.get("/", (req,res) => {
    res.send("Api working")
})

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})