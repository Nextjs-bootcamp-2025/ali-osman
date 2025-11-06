'use client';
import { useState, useEffect } from 'react';

export default function SimpleTodoApp() {
  //  1. الحالة الأساسية (State)
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  //  2. تحميل البيانات من localStorage عند تشغيل الصفحة
  useEffect(() => {
    // localStorage.getItem تستخدم للحصول على قيمة محفوظة في localStorage.
    const saved = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(saved);
  }, []);

  //  3. حفظ التغييرات في localStorage عند تحديث المهام
  useEffect(() => {
    // localStorage.setItem تستخدم لحفظ قيمة محفوظة في localStorage.
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //  4. إضافة مهمة جديدة
  function addTodo() {
    if (text.trim() === '') return;
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setText('');
  }

  //  5. حذف مهمة
  function deleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  //  6. بدء التعديل
  function startEdit(index) {
    setEditIndex(index);
    setText(todos[index]);
  }

  //  7. حفظ التعديل
  function saveEdit() {
    const updated = todos.map((todo, i) =>
      i === editIndex ? text : todo
    );
    setTodos(updated);
    setText('');
    setEditIndex(null);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">📝 تطبيق المهام البسيط</h1>

      {/* إدخال المهمة */}
      <div className="flex gap-2 mb-4 w-full max-w-sm">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="أضف مهمة جديدة..."
          className="flex-1 border rounded p-2"
        />

        {editIndex !== null ? (
          <button
            onClick={saveEdit}
            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
          >
            حفظ
          </button>
        ) : (
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
          >
            إضافة
          </button>
        )}
      </div>

      {/* عرض المهام */}
      <ul className="w-full max-w-sm space-y-2">
        {todos.map((todo, i) => (
          <li
            key={i}
            className="flex justify-between items-center border rounded p-2 bg-white"
          >
            <span>{todo}</span>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(i)}
                className="text-blue-600 hover:underline"
              >
                تعديل
              </button>
              <button
                onClick={() => deleteTodo(i)}
                className="text-red-600 hover:underline"
              >
                حذف
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
