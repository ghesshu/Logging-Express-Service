import Log from "../model/logs";
import { Request, Response } from "express";

export const saveLog = async (req: Request, res: Response) => {
  try {
    const {
      service,
      ip,
      method,
      url,
      status,
      responseTime,
      userAgent,
      timestamp,
    } = req.body;

    const newLog = new Log({
      service,
      ip,
      method,
      url,
      status,
      responseTime,
      userAgent,
      timestamp,
    });
    await newLog.save();

    res.status(201).json({ success: true, message: "Log saved successfully" });
    // console.log('log saved')
  } catch (error) {
    console.error("Failed to save log:", error);
    res.status(500).json({ success: false, message: "Failed to save log" });
  }
};
