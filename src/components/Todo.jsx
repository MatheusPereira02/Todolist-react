const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : ''}`} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      <div className="content">
        <p>{todo.texto}</p>
        <div className="categoria">({todo.categoria})</div>
      </div>
      <div className="actions">
        <button className="complete" onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>Remover</button>
      </div>
    </div>
  );
};

export default Todo;
