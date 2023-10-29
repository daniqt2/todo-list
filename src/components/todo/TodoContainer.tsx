import { Filters, TFilter } from "../filters/Filters";
import {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getTodoList,
  updateTodo,
} from "../../service/todo.service";
import { useCallback, useEffect, useMemo, useState } from "react";

import { CreateTodo } from "./CreateTodo";
import { ITodo } from "../../models/todo.interface";
import { TodoList } from "./TodoList";

export const TodoContainer = () => {
  const [items, setItems] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<TFilter>("all");

  useEffect(() => {
    let todos = getTodoList();
    setItems(todos);
  }, []);

  const setNewItems = <T,>(func: (data: T) => ITodo[], params: T) =>
    setItems([...func(params)]);

  const handleAdd = useCallback((newTodo: string) => {
    setNewItems<string>(addTodo, newTodo);
  }, []);

  const handleDeleteCompleted = useCallback(() => {
    setNewItems(deleteCompleted, undefined);
  }, []);

  const handleDelete = useCallback((id: number) => {
    setNewItems<number>(deleteTodo, id);
  }, []);

  const handleUpdate = useCallback((idx: number, done: boolean) => {
    setNewItems<{ id: number; done: boolean }>(updateTodo, { id: idx, done });
  }, []);

  const handleFilter = useCallback((val: TFilter) => setFilter(val), []);

  const finalTodos = useMemo(() => {
    if (filter === "all") return items;
    if (filter === "completed") return items.filter((i) => i.done);
    return items.filter((i) => !i.done);
  }, [filter, items]);

  return (
    <div className="w-full text-left md:p-4 rounded-lg h-full">
      <CreateTodo handleAdd={handleAdd} />
      <Filters handleFilter={handleFilter} />
      <TodoList
        items={finalTodos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
};
