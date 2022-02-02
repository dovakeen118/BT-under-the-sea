import express from "express";

import { Squid } from "../../../models/index.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const offset = req.query.offset || 0
    const limit = req.query.limit || 10
    
    const squidsQuery = Squid.query();
    const [totalSquidCount, squids] = await Promise.all([
      squidsQuery.resultSize(),
      squidsQuery.offset(offset).limit(limit),
    ]);

    const pageCount = Math.ceil(totalSquidCount / limit);
    return res.status(200).json({ squids, pageCount });
  })
);
