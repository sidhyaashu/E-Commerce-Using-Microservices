import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

// Define the route for creating a product
router.post("/product", async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Perform your logic here (e.g., saving the product)
        res.status(201).json({ message: "Product created successfully" });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});

export default router;
