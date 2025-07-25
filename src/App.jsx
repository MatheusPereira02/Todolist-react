import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

const SORT_ORDERS = {
  ASC: 'asc',
  DESC: 'desc',
  NONE: '',
};

function filterAndSortTodos(todos, filter, search, sortOrder) {
  return todos
    .filter(todo => {
      const matchesFilter =
        filter === 'all'
          ? true
          : filter === 'completed'
          ? todo.isCompleted
          : !todo.isCompleted;

      const matchesSearch = todo.texto.toLowerCase().includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === SORT_ORDERS.ASC) return a.texto.localeCompare(b.texto);
      if (sortOrder === SORT_ORDERS.DESC) return b.texto.localeCompare(a.texto);
      return 0;
    });
}

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todo-list');
    return storedTodos
      ? JSON.parse(storedTodos)
      : [
          {
            id: uuidv4(),
            texto: 'Criar Funcionalidade X no sistema',
            categoria: 'Trabalho',
            isCompleted: false,
          },
        ];
  });

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.NONE);

  useEffect(() => {
    localStorage.setItem('todo-list', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (texto, categoria) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: uuidv4(),
        texto,
        categoria,
        isCompleted: false,
      },
    ]);
  };

  const removeTodo = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const completeTodo = id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const filteredTodos = filterAndSortTodos(todos, filter, search, sortOrder);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} sortOrder={sortOrder} setSortOrder={setSortOrder} />

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          filteredTodos.map(todo => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
          ))
        )}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
