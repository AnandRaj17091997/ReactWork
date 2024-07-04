import './App.css';
import UserList from './components/UserList';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      
      <h1>MY HOC Code</h1>
      <div className='section'>
      <UserList/>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;
