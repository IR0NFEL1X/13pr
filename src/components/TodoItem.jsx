function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px', 
      padding: '10px', 
      borderBottom: '1px solid #eee' 
    }}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      <span style={{ 
        flex: 1, 
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#888' : '#000'
      }}>
        {task.text}
      </span>
      <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>Удалить</button>
    </li>
  );
}
export default TodoItem;