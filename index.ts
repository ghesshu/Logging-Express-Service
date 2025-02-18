import express from "express";
import startServer from "./controller/server";
import { validateSharedToken } from "./controller/validate";
import logs from "./routes/logs";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(validateSharedToken as express.RequestHandler);

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/api", logs);

app.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

startServer(app, port);
