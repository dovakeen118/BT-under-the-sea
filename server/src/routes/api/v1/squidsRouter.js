import express from "express";

import { Squid } from "../../../models/index.js";
import { nextWrapper } from "../../lib/nextWrapper.js";

export const squidsRouter = new express.Router();

squidsRouter.get(
  "/",
  nextWrapper(async (req, res) => {
    const squids = await Squid.query();

    return res.status(200).json(squids);
  })
);
