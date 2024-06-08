import React, { useState } from 'react';
import './App.css'; // Importuj plik CSS

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const renderTodos = () => {
    const filteredTodos = todos.filter(todo => showCompleted || !todo.completed);

    if (filteredTodos.length === 0) {
      return <p>Nothing to do...</p>;
    }

    return (
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index}>
            <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="input"
      />
      <button onClick={addTodo}>Add</button>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            checked={!showCompleted}
            onChange={toggleShowCompleted}
          />
          Schowaj ukończone
        </label>
      </div>
      {renderTodos()}
    </div>
  );
};

export default TodoApp;
