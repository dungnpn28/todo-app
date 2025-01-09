import { useEffect, useState } from 'react'
import './App.css'
import TodoCard from './components/TodoCard/TodoCard';
import { Todo } from './interface/Todo';

function App() {
  

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isCompleteScreen, setIsCompleteScreen] = useState<Boolean>(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todosDisplay, setTodosDisplay] = useState<Todo[]>([]);

  useEffect(() => {
    setTodosDisplay(todos);
  }
  , [todos]);

  const changeTab = (isCompleteScreen:Boolean) => {
    if (isCompleteScreen) {
      setTodosDisplay(todos.filter(todo => todo.status));
    } else {
      setTodosDisplay(todos.filter(todo => !todo.status));
    }
  }

  const addTodo = () => {
    let newTodo: Todo = {
      title: todoTitle,
      description: todoDescription,
      status: false,
      onStatusChange: () => {},
      onDelete: () => {}
    }
    setTodos([...todos, newTodo]);
  }
  return (
    <>
      <div>
        <h1>My Todo app</h1>
      </div>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' placeholder="What's the task title?" onChange={(e) => setTodoTitle(e.target.value)}/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder="What's the task description?" onChange={(e) => setTodoDescription(e.target.value)}/>
          </div>
          <div className='todo-input-item'>
            <button 
              type='button' 
              className='primaryBtn'
              onClick={() => addTodo()}>
                Add Todo
            </button>
          </div>
        </div>

        <div className='btn-area'>
          <button 
            className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} 
            onClick={() => {setIsCompleteScreen(false); changeTab(false)}}>Todo</button>
          <button 
            className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} 
            onClick={() => {setIsCompleteScreen(true); changeTab(true)}}>Completed</button>
        </div>
        <div className='todo-list'>
          <div> 
            {todosDisplay.map((todo, index) => (
              <TodoCard 
                key={index}
                title={todo.title} 
                description={todo.description} 
                status={todo.status} 
                onStatusChange={(status) => {
                  const newTodos = [...todos];
                  newTodos[index].status = status;
                  setTodos(newTodos);
                }}
                onDelete={() => {
                  const newTodos = [...todos];
                  newTodos.splice(index, 1);
                  setTodos(newTodos);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
