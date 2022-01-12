import express from "express";

import { squidsRouter } from "./api/v1/squidsRouter.js";
import { clientRouter } from "./clientRouter.js";

export const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api/v1/squids", squidsRouter);
