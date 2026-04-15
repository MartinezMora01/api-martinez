import { memoryDB } from "../database/memory.db.js";

function nextId() {
  if (memoryDB.clientes.length === 0) return 1;
  return Math.max(...memoryDB.clientes.map((item) => item.id)) + 1;
}

export const ClienteModel = {
  findAll({ activo } = {}) {
    if (activo === undefined) return memoryDB.clientes;
    return memoryDB.clientes.filter((item) => item.activo === activo);
  },

  findById(id) {
    return memoryDB.clientes.find((item) => item.id === id) || null;
  },

  create(data) {
    const nuevo = {
      id: nextId(),
      tipo: "basic",
      ...data
    };

    memoryDB.clientes.push(nuevo);
    return nuevo;
  },

  updateById(id, data) {
    const index = memoryDB.clientes.findIndex((item) => item.id === id);
    if (index === -1) return null;

    memoryDB.clientes[index] = {
      ...memoryDB.clientes[index],
      ...data,
      id
    };

    return memoryDB.clientes[index];
  },

  deleteById(id) {
    const index = memoryDB.clientes.findIndex((item) => item.id === id);
    if (index === -1) return null;

    const [eliminado] = memoryDB.clientes.splice(index, 1);
    return eliminado;
  }
};
