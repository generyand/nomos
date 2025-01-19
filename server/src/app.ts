import { Request, Response } from "express";
import express from "express";
// import dotenv from "dotenv";

// dotenv.config();

const app = express();
const test = (_req: Request, res: Response) => {
    console.log("Wassup, Kalibutan");
    res.send("Hello, World! hehe");
}

app.get("/", test);

// Define response type for better type safety
interface HealthCheckResponse {
    status: 'ok' | 'error';
    timestamp: string;
    version?: string;
    environment?: string;
    uptime: number;
}

// Define the handler with specific response type
type HealthCheckHandler = (
    req: Request, 
    res: Response<HealthCheckResponse>
) => void;

const healthCheck: HealthCheckHandler = (_req, res) => {
    try {
        const healthStatus: HealthCheckResponse = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            version: process.env.npm_package_version || '1.0.0',
            environment: process.env.NODE_ENV,
            uptime: process.uptime()
        };

        res.status(200).json(healthStatus);
    } catch (error) {
        res.status(503).json({
            status: 'error',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    }
};

app.get("/health", healthCheck);

export default app;
