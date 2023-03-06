import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import blogRoute from "./routes/blog.js"
import careerRoute from "./routes/career.js"


const app = express()
dotenv.config()

const connect = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit()
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})

//middlewares
app.use(express.json()) // It will make it in json format, so api request can be understood

app.use("/api/blogs", blogRoute);
app.use("/api/careers", careerRoute);

app.listen(8800, ()=>{
    connect()
    console.log("Connected to backend.")
})