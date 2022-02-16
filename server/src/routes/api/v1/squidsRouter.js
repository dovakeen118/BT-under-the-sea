import express from "express";

import { Squid } from "../../../models/index.js";
import { cleanUserInput } from "../../../services/cleanUserInput.js";
import { randomDate } from "../../../services/randomDate.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 10;

    const squidsQuery = Squid.query().orderBy("createdAt", "desc");
    const [totalSquidCount, squids] = await Promise.all([
      squidsQuery.resultSize(),
      squidsQuery.offset(offset).limit(limit),
    ]);

    const pageCount = Math.ceil(totalSquidCount / limit);
    return res.status(200).json({ squids, pageCount });
  })
);

squidsRouter.get(
  "/special-powers",
  nextWrapper(async (req, res) => {
    const squidPowers = Squid.specialPowerOptions;
    return res.status(200).json({ squidPowers });
  })
);

squidsRouter.get(
  "/:id",
  nextWrapper(async (req, res) => {
    const { id } = req.params;
    const squid = await Squid.query().findById(id).throwIfNotFound();

    return res.status(200).json({ squid });
  })
);

squidsRouter.post(
  "/",
  nextWrapper(async (req, res) => {
    const squidData = req.body.squid;
    squidData.victories = parseInt(squidData.victories);

    const birthday = randomDate();
    const data = { ...squidData, birthday };

    const cleanedData = cleanUserInput(data);
    const squid = await Squid.query().insertAndFetch(cleanedData);

    return res.status(201).json(squid);
  })
);
