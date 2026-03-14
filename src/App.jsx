import { useState, useEffect } from 'react';
import AddTodoForm from 'src/components/AddTodoForm';
import TodoItem from 'src/components/TodoItem';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos'); // Загрузка из памяти [cite: 366]
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // Сохранение в память [cite: 371]
  }, [todos]);

  const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, completed: false }]);
  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
  const toggleTodo = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const editTodo = (id, newText) => setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h1>Менеджер задач</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <TodoItem key={todo.id} task={todo} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
        ))}
      </ul>
      {todos.length > 0 && <button onClick={() => setTodos([])} style={{ width: '100%', marginTop: '20px' }}>Очистить всё</button>}
    </div>
  );
}
export default App;