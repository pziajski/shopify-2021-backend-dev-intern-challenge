import express from 'express';
import cors from "cors";
import uploadRouter from "./routes/upload";

// variables
const app = express();
const PORT = 8000;

// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(cors({
    origin: true,
    credentials: true
}));

// endpoints & routes
app.get("/", (_req, res) => res.send("base route..."));
app.use("/upload", uploadRouter);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});