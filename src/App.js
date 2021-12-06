import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <div className="todo-app">
        <TodoList /> 
      </div>
      <Footer />
    </div>  
  );
}

export default App;
