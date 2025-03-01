import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";

import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "25-09-2025",
    },
    {
      name: "Go to college",
      dueDate: "25-09-2025",
    },
    {
      name: "Like this video",
      dueDate: "25-09-2025",
    },

  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems> 
     
    </center>
  );
}

export default App;
