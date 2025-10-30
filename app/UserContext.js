'use client';
import { createContext, useContext, useEffect, useState } from 'react';

// state management system
// 1- context
 // 2- redux

// إنشاء السياق
const UserContext = createContext();

// دالة المزوّد (Provider)
export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);     // قائمة المستخدمين
  const [loading, setLoading] = useState(true); // حالة التحميل
  const [error, setError] = useState(null);     // الأخطاء

  // دالة لجلب المستخدمين من JSONPlaceholder
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.log(err.message);
      setError('فشل في جلب المستخدمين');
    } finally {
      setLoading(false);
    }
  }

  // تنفيذ الجلب عند تحميل التطبيق أول مرة
  useEffect(() => {
    fetchUsers();
  }, []);

  // القيم المشتركة في السياق
  const value = { users, loading, error, fetchUsers };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// دالة لاستخدام السياق بسهولة
export function useUsers() {
  return useContext(UserContext);
}



// import './globals.css';
// import { UserProvider } from './context/UserContext';

// export const metadata = {
//   title: 'Users Context Example',
//   description: 'مثال لاستخدام Context API مع JSONPlaceholder',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="ar" dir="rtl">
//       <body className="bg-gray-50 text-gray-800 font-sans">
//         {/* ✅ تغليف جميع الصفحات داخل UserProvider */}
//         <UserProvider>{children}</UserProvider>
//       </body>
//     </html>
//   );
// }


// 'use client';
// import UserList from './components/UserList';

// export default function HomePage() {
//   return (
//     <main className="max-w-4xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4 text-right">👥 قائمة المستخدمين</h1>
//       <UserList />
//     </main>
//   );
// }


// 'use client';
// import Link from 'next/link';
// import { useUsers } from '../context/UserContext';

// export default function UserList() {
//   const { users, loading, error } = useUsers();

//   if (loading) return <p>⏳ جارٍ تحميل المستخدمين...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <ul className="space-y-3">
//       {users.map((user) => (
//         <li key={user.id} className="p-4 bg-white shadow rounded flex justify-between">
//           <div>
//             <h2 className="text-lg font-semibold">{user.name}</h2>
//             <p className="text-gray-500">{user.email}</p>
//           </div>
//           <Link
//             href={`/user/${user.id}`}
//             className="text-blue-600 hover:underline"
//           >
//             عرض التفاصيل →
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }
