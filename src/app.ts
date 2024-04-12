import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import v1router from "./routers/v1";

dotenv.config();
const app: Application = express();

// Allow requests from specific origins
const corsOptions: cors.CorsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// Middlewares
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).send("Server is running...");
});
// api routers
app.use(`/${process.env.API_VERSION}`, v1router);

export default app;
