import express from "express";

import { Squid } from "../../../models/index.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const squids = await Squid.query().orderBy("createdAt", "desc");
    const specialPowers = Squid.jsonSchema.properties.specialPower.enum;

    return res.status(200).json({ squids, specialPowers });
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
