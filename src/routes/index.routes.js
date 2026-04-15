import { Router } from "express";

import { clientesRouter } from "./clientes.routes.js";

export const apiRouter = Router();

apiRouter.get("/estado", (_req, res) => {
  return res.json({ ok: true, servicio: "activo" });
});

apiRouter.use("/clientes", clientesRouter);
