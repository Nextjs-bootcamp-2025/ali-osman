'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

 const fetchUsers = async () => {
    const res = await axios.get('/api/users');
    const data = await res.data;
    setUsers(data);
  }

 const addUser = async () => {
    await axios.post('/api/users', { name });
    setName('');
    fetchUsers();
  }

 const deleteUser = async (id) => {
    await axios.delete('/api/users', { data: { id } }).then((res) => {
      fetchUsers();
    })
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-right">
         قائمة المستخدمين
      </h1>
      <div className="flex gap-2 mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 flex-1"
          placeholder="اسم المستخدم"
        />
        <button
          onClick={addUser}
          className="bg-green-600 text-white px-4 rounded"
        >
          إضافة
        </button>
      </div>

      <ul className="space-y-2">
        {users && users.map((user) => (
          <li key={user.id} className="flex justify-between border p-2 rounded">
            {user.name}
            <button
              onClick={() => deleteUser(user.id)}
              className="text-red-600 hover:text-red-800  cursor-pointer"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}


export default UsersPage