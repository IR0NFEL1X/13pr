import { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Добавить новую задачу..." 
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodoForm;