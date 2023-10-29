import { ITodo } from "../models/todo.interface";
const TODOS = "todos";

export const getTodoList = () => {
  const item = localStorage.getItem(TODOS);
  return (item ? JSON.parse(item) : []) as ITodo[];
};

export const addTodo = (desc: string) => {
  const todoList = getTodoList();
  todoList.push({
    description: desc,
    id: todoList.length + 1,
    done: false,
  });
  setTodoList(todoList);
  return todoList;
};

export const deleteTodo = (id: number) => {
  const todoList = getTodoList();
  todoList.splice(id, 1);
  setTodoList(todoList);
  return todoList;
};
export const deleteCompleted = () => {
  const todoList = getTodoList();
  const filtered = todoList.filter((t) => !t.done);
  setTodoList(filtered);
  return filtered;
};

export const updateTodo = ({ id, done }: { id: number; done: boolean }) => {
  const todoList = getTodoList();
  todoList[id].done = done;
  setTodoList(todoList);
  return todoList;
};

const setTodoList = (list: ITodo[]) =>
  localStorage.setItem(TODOS, JSON.stringify(list));
