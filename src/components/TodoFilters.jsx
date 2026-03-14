function TodoFilters({ filter, onFilterChange, activeCount }) {
  const filters = [
    { id: 'all', label: 'Все' },
    { id: 'active', label: 'Активные' },
    { id: 'completed', label: 'Готово' }
  ];

  return (
    <div className="filters-container">
      <span className="count">Осталось: {activeCount}</span>
      <div className="filter-buttons">
        {filters.map(f => (
          <button 
            key={f.id}
            className={filter === f.id ? 'filter-btn active' : 'filter-btn'}
            onClick={() => onFilterChange(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TodoFilters;