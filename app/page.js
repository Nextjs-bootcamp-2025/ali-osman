'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './components/Button';
import CourseContent from './components/CourseContent';
import Counter from './components/Counter';

export default function Home() {
  const [shouldShowTitle, setShouldShowTitle] = useState(false);

  const handleClick = () => {
    setShouldShowTitle(true);
  };

  return (
    <main className="main">
      {shouldShowTitle == true ? (
        <h1 className="text-3xl font-bold underline">Nextjs Bootcamp</h1>
      ) : null}
      <CourseContent
        courseTitle={'Nextjs Crash Course'}
        courseText={
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam optio, tempore accusamus minima blanditiis omnis sunt dolor laboriosam error assumenda numquam maxime quos, cupiditate corrupti reiciendis id. Eum, asperiores minus.'
        }
        button={<Button title={'Start Course'} />}
      />
      <Button title={'Start from home'} />
      <button
        onClick={handleClick}
        className="p-2 bg-green-600 text-white mt-4"
      >
        show title
      </button>

      <Counter />
    </main>
  );
}
