import './App.css';
import { TodoTabs } from './components/TodoTabs';
import data from './data/items.json'

function App() {
  return (
    <div className="App">
      <h1>
        #todo
      </h1>
      <div className='content'>
        <TodoTabs data={data} activeType={2} />
      </div>
    </div>
  );
}

export default App;
