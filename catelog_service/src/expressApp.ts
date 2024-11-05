import express, { Request, Response, NextFunction } from "express";
import catelogRouter from "./api/catelog.routes";

const app = express();

app.use(express.json());

// Middleware to log request details
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Use catalog routes
app.use("/", catelogRouter);

// Error-handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error encountered:", err.message);
    res.status(500).json({ error: "An unexpected error occurred" });
});

export default app;
