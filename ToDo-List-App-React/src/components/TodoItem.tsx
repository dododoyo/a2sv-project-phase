import React, { useState } from "react";
import { TodoItemProps } from "../types";

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
  onEdit,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditAction = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="mr-2"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={handleEditChange}
          onBlur={handleEditSave}
          className="flex-grow px-2 py-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          onDoubleClick={handleEditAction}
          className={`flex-grow ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      {isEditing ? (
        <button
          onClick={handleEditSave}
          className="text-green-500 hover:text-green-700 mr-2"
        >
          Save
        </button>
      ) : (
        <button
          onClick={handleEditAction}
          className="text-blue-500 hover:text-blue-700 mr-2"
        >
          Edit
        </button>
      )}

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
