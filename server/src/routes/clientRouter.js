import express from "express";

import { getClientIndexPath } from "../config/getClientIndexPath.js";

export const clientRouter = new express.Router();

const clientRoutes = ["/", "squids", "/user-sessions/new", "/users/new"];
clientRouter.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});
