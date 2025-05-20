import { useState } from 'react'
import AddToDo from './AddToDo';
import './App.css'


function App() {
  
  const [todos, setTodos] = useState([
    {title: "finish project", done: false},
    {title: "go to lecture", done: false},
    {title: "eat lunch", done: true}
  ]);
  
  // Implement this handler to let let the user add tasks
  const handleAddToDo = (title) => {
    setTodos((prev) => [
      ...prev,
      {title: title, done: false}
    ]);
  };

  // Implement this handler to check/uncheck the todo box
  const handleDone = (todo) => {
    setTodos((prev) => {
      return prev.map((entry) => {
        console.log(entry.title);
        console.log(todo.title)
        if (entry.title === todo.title) {
          return {
            'title': entry.title, 
            'done': !entry.done
          };
        }
        return entry;
      })
    });
  }

  return (
    <div>
      <AddToDo handleAdd={handleAddToDo}/>
      {
        todos.map((todo) => {
          return (
              <div className="todo-item">
                <input 
                  className="todo-check"
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => {handleDone(todo)}}/>
                <span>{todo.title}</span>
              </div>
            );
        })
      }
    </div>
  )
}

export default App
