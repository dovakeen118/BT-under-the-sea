import express from "express";

import { Squid } from "../../../models/index.js";

export const squidsRouter = new express.Router();

squidsRouter.get("/", async (req, res) => {
  try {
    const squids = await Squid.query();
    return res.status(200).json(squids);
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});
