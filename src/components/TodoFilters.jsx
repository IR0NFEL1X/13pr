function TodoFilters({ filter, onFilterChange, activeCount }) {
  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'active', label: 'Активные' },
    { id: 'completed', label: 'Готово' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
      <span>Осталось: {activeCount}</span>
      <div>
        {filters.map(f => (
          <button 
            key={f.id}
            onClick={() => onFilterChange(f.id)}
            style={{ 
              marginLeft: '5px',
              fontWeight: filter === f.id ? 'bold' : 'normal',
              backgroundColor: filter === f.id ? '#ddd' : '#fff'
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default TodoFilters;