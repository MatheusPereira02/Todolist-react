import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [texto, setTexto] = useState('');
  const [categoria, setCategoria] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!texto || !categoria) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    addTodo(texto, categoria);
    setTexto('');
    setCategoria('');
  };

  return (
    <div className="todo-form">
      <h2>Adicionar Nova Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="texto">Tarefa:</label>
          <input
            id="texto"
            type="text"
            value={texto}
            placeholder="Digite a tarefa"
            onChange={(e) => setTexto(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          >
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Saúde">Saúde</option>
            <option value="Estudos">Estudos</option>
          </select>
        </div>

        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
