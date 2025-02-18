import { saveLog } from "../controller/log";
import express from "express";


const router = express.Router();

router.post("/logs", saveLog as express.RequestHandler);

export default router;
