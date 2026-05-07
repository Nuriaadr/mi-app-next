export async function POST(req) {
    try {
      const body = await req.json();
      
      if (!body.name || !body.price) {
        return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
      }
  
      return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
    } catch (error) {
      return Response.json({ message: "Error en la solicitud" }, { status: 500 });
    }
  }
  