import expressApp from "./expressApp";

const PORT: number = parseInt(process.env.PORT || "8000", 10);

// Function to start the server
const startServer = async (): Promise<void> => {
    try {
        expressApp.listen(PORT, () => {
            console.log(`Server is listening on port: ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1);
    }
};

// Handle uncaught exceptions globally
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

// Start the server
startServer().catch((error) => {
    console.error("Error during server startup:", error);
    process.exit(1);
});
