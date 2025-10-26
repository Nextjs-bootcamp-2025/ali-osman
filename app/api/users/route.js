export async function GET() {
  const users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' },
  ];
  console.log(users);
  return Response.json(users);
}

export async function POST(request) {
  const data = await request.json();
  console.log('%c[] -> data : ', 'color: #b4876b', data);

  return Response.json({ message: `تم استقبال المستخدم: ${data.name}` });
}
