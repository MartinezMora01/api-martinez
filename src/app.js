import express from "express";
import cors from "cors";

import { env } from "./config/env.js";
import { requestLogger } from "./middlewares/requestLogger.js";
import { apiRouter } from "./routes/index.routes.js";

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(requestLogger);
  app.use(express.static("public"));

  app.get("/", (_req, res) => {
    res.json({
      ok: true,
      mensaje: "API de Martinez activa",
      docs: `${env.apiPrefix}/estado`
    });
  });

  app.use(env.apiPrefix, apiRouter);

  app.use((_req, res) => {
    res.status(404).json({
      ok: false,
      mensaje: "Ruta no encontrada"
    });
  });

  return app;
}
