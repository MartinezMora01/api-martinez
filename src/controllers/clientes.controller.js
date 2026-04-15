import { ClienteModel } from "../models/cliente.model.js";

function parseActivoFilter(value) {
  if (value === undefined) return undefined;
  if (value === "true") return true;
  if (value === "false") return false;
  return null;
}

export const ClientesController = {
  getAll(req, res) {
    const activo = parseActivoFilter(req.query.activo);

    if (activo === null) {
      return res.status(400).json({
        ok: false,
        mensaje: "El filtro activo debe ser true o false"
      });
    }

    const data = ClienteModel.findAll({ activo });
    return res.status(200).json({ ok: true, total: data.length, data });
  },

  getById(req, res) {
    const id = Number(req.params.id);
    const cliente = ClienteModel.findById(id);

    if (!cliente) {
      return res.status(404).json({ ok: false, mensaje: "Cliente no encontrado" });
    }

    return res.status(200).json({ ok: true, data: cliente });
  },

  create(req, res) {
    const nuevo = ClienteModel.create(req.body);
    return res.status(201).json({ ok: true, mensaje: "Cliente creado", data: nuevo });
  },

  update(req, res) {
    const id = Number(req.params.id);
    const actualizado = ClienteModel.updateById(id, req.body);

    if (!actualizado) {
      return res.status(404).json({ ok: false, mensaje: "Cliente no encontrado" });
    }

    return res.status(200).json({ ok: true, mensaje: "Cliente actualizado", data: actualizado });
  },

  remove(req, res) {
    const id = Number(req.params.id);
    const eliminado = ClienteModel.deleteById(id);

    if (!eliminado) {
      return res.status(404).json({ ok: false, mensaje: "Cliente no encontrado" });
    }

    return res.status(200).json({ ok: true, mensaje: "Cliente eliminado", data: eliminado });
  }
};
