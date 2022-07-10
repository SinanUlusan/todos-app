import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";

function Header() {
  const [form, setForm] = useState("");
  const [todos, setTodos] = useState([]);
  const [filtered, setFiltered] = useState(todos);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      name: form,
      id: new Date().getTime(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setForm("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
      </form>
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
      <Footer
        todos={todos}
        setTodos={setTodos}
        filtered={filtered}
        setFiltered={setFiltered}
      />
    </header>
  );
}

export default Header;
