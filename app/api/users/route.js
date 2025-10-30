let users = [
  { id: 1, name: 'Ali' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Ahmed' },
  { id: 4, name: 'Mona' },
];

// Get all users
export async function GET() {
  return Response.json(users);
}

// Add new user
export async function POST(request) {
  // this is the request body from that we receive from frontend
  const body = await request.json();
  // new user will be added to the users array
  const newUser = { id: Date.now(), name: body.name };
  // push the new user to the users array
  users.push(newUser);
  // console.log('%c[] -> users : ', 'color: #5bce75', users);

  // return the new user => this part is what we get from backend in frontend response
  return Response.json({
    seccess: true,
    message: 'User added successfully',
    newUser: newUser,
    users: users,
  });
}

// Delete user
export async function DELETE(request) {
  // this is the request body from that we receive from frontend contain user id that we want to delete
  // const { id } = await request.json();
  const body = await request.json()
  const id = body.id
  console.log('%c[] -> id : ', 'color: #562f02', id);

  // remove the user from the users array by id witch we get from frontend
  const updatedUsers = users.filter((user) => user.id !== id);
  console.log('%c[] -> updatedUsers : ', 'color: #e636ce', updatedUsers);

  // return the new users array => this part is what we get from backend in frontend response
  return Response.json({ success: true, users: updatedUsers });
}
