import React from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Andy's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
