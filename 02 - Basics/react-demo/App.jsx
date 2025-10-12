import { useState } from "react";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState("todo");

  return (
    <div className="app-container">
      <h1>React Demo Application</h1>

      <div className="nav-buttons">
        <button
          className={activeComponent === "todo" ? "active" : ""}
          onClick={() => setActiveComponent("todo")}
        >
          Todo List
        </button>
        <button
          className={activeComponent === "counter" ? "active" : ""}
          onClick={() => setActiveComponent("counter")}
        >
          Counter
        </button>
      </div>

      <div className="component-container">
        {activeComponent === "todo" ? <TodoList /> : <Counter />}
      </div>
    </div>
  );
}

export default App;
