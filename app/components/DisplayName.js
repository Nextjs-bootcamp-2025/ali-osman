'use client';

import { useState, useEffect, use } from 'react';

const DisplayName = () => {
  const [name, setName] = useState('');

  // هذا الكود يُنفّذ مرة واحدة فقط عند تحميل الصفحة
  useEffect(() => {
    console.log('تم تحميل المكون لأول مرة ✅');
  }, []);

  // هذا الكود يُنفّذ في كل مرة يتغير فيها الاسم
  useEffect(() => {
    console.log(`مرحبًا ${name}!`);
  }, [name]);

  return (
    <div className="text-center border p-12">
      <h1 className="text-2xl font-bold mb-4">مرحبًا بك في الدورة 🎓</h1>
      <input
        type="text"
        className="border p-2 text-center"
        placeholder="enter your name ..."
        onChange={(event) => setName(event.target.value)}
      />

      <div className="name mt-6">
        {name ? (
          <p className="mt-4 text-green-600 text-lg">
            أهلاً {name}! 👋 سعيد برؤيتك هنا.
          </p>
        ) : (
          'name not entered yet'
        )}
      </div>
    </div>
  );
};

export default DisplayName;
