import express from "express";

const app = express();

const test = (req: express.Request, res: express.Response) => {
    console.log("Wassup, Kalibutan");
    res.send("Hello, World! hehe");
}

app.get("/", test);

export default app;
