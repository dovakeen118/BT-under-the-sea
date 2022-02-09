import express from "express";

import { Squid } from "../../../models/index.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const specialPowers = Squid.jsonSchema.properties.specialPower.enum;

    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10;

    const squidsQuery = Squid.query().orderBy("createdAt", "desc");
    const [totalSquidCount, squids] = await Promise.all([
      squidsQuery.resultSize(),
      squidsQuery.offset(offset).limit(limit),
    ]);

    const pageCount = Math.ceil(totalSquidCount / limit);
    return res.status(200).json({ squids, specialPowers, pageCount });
  })
);

squidsRouter.post(
  "/",
  nextWrapper(async (req, res) => {
    const squidData = req.body.squid;
    const squid = await Squid.query().insertAndFetch(squidData);

    return res.status(201).json(squid);
  })
);
