import { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoFilters from './components/TodoFilters';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos_13pr');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos_13pr', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, completed: false }]);
  const toggleTodo = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Мой список задач</h2>
      <AddTodoForm onAdd={addTodo} />
      <TodoFilters 
        filter={filter} 
        onFilterChange={setFilter} 
        activeCount={todos.filter(t => !t.completed).length} 
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} task={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
export default App;