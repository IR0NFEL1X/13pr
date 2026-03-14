import { useState } from 'react';

function TodoItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(task.id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      
      {isEditing ? (
        <input 
          className="edit-input"
          value={editText} 
          onChange={(e) => setEditText(e.target.value)} 
          onBlur={handleSave}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          autoFocus 
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)} className="task-text">
          {task.text}
        </span>
      )}

      <button onClick={() => onDelete(task.id)} className="delete-btn">❌</button>
    </li>
  );
}

export default TodoItem;