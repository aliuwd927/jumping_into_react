import React from 'react';
import { useState } from 'react';
import './App.css';
import Form from './components/form';
import TodoList from './components/TodoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Andy's Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText = {setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
