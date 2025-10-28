'use client';
import { useState } from 'react';
import axios from 'axios';

export default function ContactComponent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('جارٍ الإرسال...');
    console.log('form', form);

    try {
      const res = await axios.post('/api/contact', form);
      const data = await res.data;
      console.log('%c[] -> data : ', 'color: #c3a539', data);

      if (!data) throw new Error(res.statusText || 'حدث خطأ');

      setStatus(res.statusText);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('⚠️ ' + err.message);
    }
  };

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-right">📩 نموذج التواصل</h1>

      <form onSubmit={handleSubmit} className="space-y-4 text-right">
        <input
          name="name"
          placeholder="الاسم"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border rounded p-2 w-full"
        />
        <input
          name="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border rounded p-2 w-full"
        />
        <textarea
          name="message"
          placeholder="الرسالة"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border rounded p-2 w-full"
          rows={3}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          إرسال
        </button>
      </form>

      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
    </main>
  );
}
