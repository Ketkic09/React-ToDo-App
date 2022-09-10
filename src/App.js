
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <h1 className="heading">React To Do App</h1>
    <div className="todo-app">
      <TodoList/>

    </div>
    </>
  );
}

export default App;
