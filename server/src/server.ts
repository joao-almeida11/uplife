import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

app.get("/", (req, res) => {
  res.json({ message: "API is running", version: "1.0.0" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({name: 1})
});

export default app;