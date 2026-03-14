import { useState, useEffect } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoFilters from './components/TodoFilters';
import TodoItem from './components/TodoItem';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos_13pr');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos_13pr', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Менеджер задач</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoFilters 
        filter={filter} 
        onFilterChange={setFilter} 
        activeCount={todos.filter(t => !t.completed).length} 
      />
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            task={todo} 
            onToggle={toggleTodo} 
            onDelete={deleteTodo} 
            onEdit={editTodo}
          />
        ))}
      </ul>
      {todos.length > 0 && (
        <button className="clear-all" onClick={() => setTodos([])}>Очистить всё</button>
      )}
    </div>
  );
}

export default App;