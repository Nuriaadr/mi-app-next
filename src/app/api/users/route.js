export async function GET() {
    const users = [
      { id: 1, name: "Juan Pérez", email: "juan@example.com" },
      { id: 2, name: "María López", email: "maria@example.com" },
      { id: 3, name: "Carlos Gómez", email: "carlos@example.com" }
    ];
    
    return Response.json(users, { status: 200 });
  }
  