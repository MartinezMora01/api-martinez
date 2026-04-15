export function validateCliente(req, res, next) {
  const { nombre, correo, activo, tipo } = req.body;

  if (!nombre || typeof nombre !== "string") {
    return res.status(400).json({ ok: false, mensaje: "El nombre es obligatorio" });
  }

  if (!correo || typeof correo !== "string" || !correo.includes("@")) {
    return res.status(400).json({ ok: false, mensaje: "El correo no es valido" });
  }

  if (activo !== undefined && typeof activo !== "boolean") {
    return res.status(400).json({ ok: false, mensaje: "activo debe ser boolean" });
  }

  if (tipo !== undefined && !["basic", "premium"].includes(tipo)) {
    return res.status(400).json({ ok: false, mensaje: "tipo debe ser basic o premium" });
  }

  next();
}
