import express, { Request, Response, NextFunction } from "express";

export const validateSharedToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const sharedToken = process.env.SHARED_TOKEN || ("1234gg" as string); // Token from .env
  const tokenFromRequest = req.headers["x-api-token"]; // Token sent by the auth service

  console.log(tokenFromRequest);

  if (tokenFromRequest !== sharedToken) {
    return res.status(403).json({ error: "Forbidden: Invalid token" });
  }

  next(); // Proceed if the token is valid
};
