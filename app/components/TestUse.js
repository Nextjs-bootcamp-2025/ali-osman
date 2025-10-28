'use client';
import { use } from 'react';
import { async } from './../api/hello/route';

const Test = ({ params }) => {
  const data = use(params);

  const testPromise = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>test component</h1>
    </div>
  );
};
