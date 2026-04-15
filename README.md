# API Martinez 

Base de API REST en Express con estructura por capas.

## Diferencias frente al ejemplo base

- Recurso principal: `clientes`.
- Campo adicional opcional: `tipo` (`basic` o `premium`).
- Filtro en listado por query param: `?activo=true|false`.

## Estructura

- `src/config`: variables de entorno.
- `src/routes`: rutas y agrupadores.
- `src/controllers`: logica de endpoints.
- `src/models`: acceso a datos.
- `src/database`: base en memoria para pruebas.
- `src/middlewares`: validaciones y filtros.

## Pasos de uso

1. Instalar dependencias:

```bash
npm install
```

1. (Opcional) crear archivo `.env` usando `.env.example`.
2. Ejecutar en desarrollo:

```bash
npm run dev
```

1. Probar rutas:

- `GET http://localhost:3000/api/v1/estado`
- `GET http://localhost:3000/api/v1/clientes`
- `GET http://localhost:3000/api/v1/clientes?activo=true`
- `GET http://localhost:3000/api/v1/clientes/1`
- `POST http://localhost:3000/api/v1/clientes`
- `PUT http://localhost:3000/api/v1/clientes/1`
- `DELETE http://localhost:3000/api/v1/clientes/1`

Ejemplo de body para POST/PUT:

```json
{
  "nombre": "Martinez",
  "correo": "martinez@demo.com",
  "activo": true,
  "tipo": "premium"
}
```
