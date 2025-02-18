import mongoose, { models } from "mongoose";

const logSchema = new mongoose.Schema(
  {
    service: { type: String, required: true }, // Identify the service generating the log
    ip: { type: String, required: false },
    method: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: Number, required: true },
    responseTime: { type: Number, required: true },
    userAgent: { type: String, required: false },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Log = models.Log || mongoose.model("Log", logSchema);
export default Log;
