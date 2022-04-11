import { Router } from "express";
import { desenvRoutes } from "./desenv.routes";
import { nivelRoutes } from "./nivel.routes";

const routes = Router();

routes.use("/desenv", desenvRoutes);
routes.use("/nivel", nivelRoutes);

export { routes };