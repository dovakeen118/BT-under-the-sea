import express from "express";

import { apiRouter } from "./apiRouter.js"
import { clientRouter } from "./clientRouter.js";

export const rootRouter = new express.Router();

rootRouter.use("/", clientRouter);
rootRouter.use("/api", apiRouter);
