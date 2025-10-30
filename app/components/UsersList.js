'use client';
import Link from 'next/link';
import { useUsers } from '../context/UserContext';

export default function UserList() {
  const { users, loading, error } = useUsers();

  if (loading) return <p>⏳ جارٍ تحميل المستخدمين...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <ul className="space-y-3">
      {users.map((user) => (
        <li key={user.id} className="p-4 bg-white shadow rounded flex justify-between">
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <Link
            href={`/user/${user.id}`}
            className="text-blue-600 hover:underline"
          >
            عرض التفاصيل →
          </Link>
        </li>
      ))}
    </ul>
  );
}