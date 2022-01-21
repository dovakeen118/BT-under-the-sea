import express from "express";

import { Squid } from "../../../models/index.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const squidsQuery = Squid.query();
    if (req.query.offset) {
      const [totalSquidCount, squids] = await Promise.all([
        squidsQuery.resultSize(),
        squidsQuery.offset(req.query.offset).limit(req.query.limit),
      ]);

      const pageCount = Math.ceil(totalSquidCount / req.query.limit);
      return res.status(200).json({ squids, pageCount });
    }
    const squids = await squidsQuery;
    return res.status(200).json({ squids });
  })
);
