import { useState } from 'react'
import './App.css'
import TodoCard from './components/TodoCard/TodoCard';
import { Todo } from './interface/Todo';

function App() {
  

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todoStatus, setTodoStatus] = useState(false);

  const addTodo = () => {
    
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
            <input type='text' placeholder="What's the task title?" />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder="What's the task description?" />
          </div>
          <div className='todo-input-item'>
            <button 
              type='button' 
              className='primaryBtn'
              onClick={() => console.log('Add todo')}>
                Add Todo
            </button>
          </div>
        </div>

        <div className='btn-area'>
          <button 
            className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} 
            onClick={() => setIsCompleteScreen(false)}>Todo</button>
          <button 
            className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} 
            onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          <div>
            <TodoCard 
              title='Learn React' 
              description='Learn React and build a todo app' 
              status={todoStatus} 
              onStatusChange={() => {setTodoStatus(!todoStatus)}}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
