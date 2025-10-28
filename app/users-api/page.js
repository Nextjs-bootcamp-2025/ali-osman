'use client';
import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  async function fetchUsers() {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
  }

  async function addUser() {
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    setName('');
    fetchUsers();
  }

  async function deleteUser(id) {
    await fetch('/api/users', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-right">
        👥 قائمة المستخدمين
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
        {users.map((u) => (
          <li key={u.id} className="flex justify-between border p-2 rounded">
            {u.name}
            <button
              onClick={() => deleteUser(u.id)}
              className="text-red-600 hover:text-red-800"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
