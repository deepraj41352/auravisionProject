import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from './routes/SeedRoutes.js'
dotenv.config();
const app = express();

mongoose
    .connect(process.env.MONGODB_URI).then(() => {
        console.log("DB CONNECT");
    }).catch((err) => {
        console.log(err.message);
    })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`server at http://localhost:${port}`));