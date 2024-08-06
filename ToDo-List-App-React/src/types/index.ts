export interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}
export interface AddTodoProps {
  onAddTodo: (text: string) => void;
}
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}