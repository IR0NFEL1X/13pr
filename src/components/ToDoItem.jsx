import { useState } from 'react';

function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    onEdit(task.id, editText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? 'done' : ''}`} style={{ display: 'flex', gap: '10px', padding: '10px' }}>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      
      {isEditing ? (
        <input value={editText} onChange={(e) => setEditText(e.target.value)} onBlur={handleSave} autoFocus />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)} style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>
          {task.text}
        </span>
      )}
      
      <button onClick={() => onDelete(task.id)} style={{ background: 'red', color: 'white' }}>Удалить</button>
    </li>
  );
}
export default TodoItem;