import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Todo } from "../types";

const TodoList: React.FC = () => {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Learn React", completed: true },
  //   { id: 2, text: "Learn TypeScript", completed: true },
  //   { id: 3, text: "Submit Projects", completed: true },
  // ]);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="container mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
