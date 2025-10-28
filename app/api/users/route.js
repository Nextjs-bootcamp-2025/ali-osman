let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' },
];

// Get all users
export async function GET() {
  return Response.json(users);
}

// Add new user
export async function POST(request) {
  const body = await request.json();
  const newUser = { id: Date.now(), name: body.name };
  users.push(newUser);
  console.log('%c[] -> users : ', 'color: #5bce75', users);

  return Response.json({
    seccess: true,
    message: 'User added successfully',
    newUser: newUser,
    users: users,
  });
}

// Delete user
export async function DELETE(request) {
  const { id } = await request.json();
  console.log('%c[] -> id : ', 'color: #562f02', id);
  const updatedUsers = users.filter((user) => user.id !== id);
  console.log('%c[] -> users : ', 'color: #e636ce', updatedUsers);

  return Response.json({ success: true, users: users });
}
