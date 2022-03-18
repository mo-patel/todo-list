import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoTabs } from './components/TodoTabs';
import data from './data/items.json'

function App() {
  return (
    <div className="App">
      <h3>
        Todo List
      </h3>
      <div className='content'>
        <TodoTabs data={data} activeType={2} />
      </div>
    </div>
  );
}

export default App;
