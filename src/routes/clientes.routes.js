import { Router } from "express";

import { ClientesController } from "../controllers/clientes.controller.js";
import { validateCliente } from "../middlewares/validateCliente.js";

export const clientesRouter = Router();

clientesRouter.get("/", ClientesController.getAll);
clientesRouter.get("/:id", ClientesController.getById);
clientesRouter.post("/", validateCliente, ClientesController.create);
clientesRouter.put("/:id", validateCliente, ClientesController.update);
clientesRouter.delete("/:id", ClientesController.remove);
