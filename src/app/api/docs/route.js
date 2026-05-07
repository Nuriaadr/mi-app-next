export async function GET() {
  const swaggerSpec = {
    openapi: "3.0.0",
    info: {
      title: "API de Next.js",
      version: "1.0.0",
      description: "Documentación de la API de despliegues",
    },
    servers: [{ url: "http://localhost:3001" }],
    paths: {
      "/api/users": {
        get: {
          summary: "Lista de usuarios",
          description: "Devuelve todos los usuarios",
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  example: [
                    { id: 1, name: "Juan Pérez", email: "juan@example.com" },
                    { id: 2, name: "María López", email: "maria@example.com" },
                  ],
                },
              },
            },
          },
        },
      },
      "/api/products": {
        get: {
          summary: "Lista de productos",
          description: "Devuelve todos los productos",
          responses: {
            200: {
              description: "OK",
              content: {
                "application/json": {
                  example: [
                    { id: 1, name: "Laptop", price: 1000 },
                    { id: 2, name: "Smartphone", price: 500 },
                  ],
                },
              },
            },
          },
        },
      },
      "/api/product": {
        post: {
          summary: "Crear un producto",
          description: "Hay que mandarle name y price en el body",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                example: { name: "Monitor", price: 350 },
              },
            },
          },
          responses: {
            201: {
              description: "Producto creado",
              content: {
                "application/json": {
                  example: {
                    message: "Producto agregado",
                    product: { name: "Monitor", price: 350 },
                  },
                },
              },
            },
            400: {
              description: "Faltan datos",
              content: {
                "application/json": {
                  example: { message: "Nombre y precio son requeridos" },
                },
              },
            },
            500: {
              description: "Error del servidor",
              content: {
                "application/json": {
                  example: { message: "Error en la solicitud" },
                },
              },
            },
          },
        },
      },
    },
  };

  return Response.json(swaggerSpec, { status: 200 });
}
