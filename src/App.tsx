import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoTabs } from './components/TodoTabs';
import data from './data/items.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoTabs data={data} activeType={2} />
      </header>
    </div>
  );
}

export default App;
