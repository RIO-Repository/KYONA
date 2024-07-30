import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));

app.use((err, req, res, next) =>{
    const status = err.status || 500 ;
    const message = err.message || "Error happened !";
    return res.status(status).json ({
        success: false,
        status,
        message,
    });
});


app.get("/", async (req, res) => {
    res.status(200).json ({
        message: "Hey👋! Welcome to server ",
    });
});

const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Mongodb is connected "))
    .catch((err) => {
        console.error("Mongodb is not connected");
        console.error(err);
    });
};

const startServer = async() => {
    try {
        
        connectDB();
        app.listen(5000, () => console.log("Server started on 5000 port"))
    }catch (error) {
        console.log(error);
    }
};
startServer();
