'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
        // 'https://fakestoreapi.com/products'
      );

      if (response.status === 200) {
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      }

      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  // will displaying when isLoading is true and no data yet
  if (isLoading) {
    return (
      <div className="text-center mt-6">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="users-main text-center mt-6 underline">
      <h1 className="text-2xl font-bold">Users List</h1>
      <div className="users-container flex flex-col gap-4 mt-6">
        {/* will display when data is available */}
        {users.length > 0 &&
          // each item should have a unique key
          users.map((user, index) => {
            return (
              <div key={user.id} className="flex flex-col gap-4 border">
                <span>
                  {user.name} index: {index}
                </span>
                <Link href="https://asaryasoft.com"> user websile </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
