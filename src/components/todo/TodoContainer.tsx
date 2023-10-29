import { Filters, TFilter } from "../filters/Filters";
import {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getTodoList,
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

  const handleAdd = useCallback((newTodo: string) => {
    let newTodos = addTodo(newTodo);
    setItems([...newTodos]);
  }, []);

  const handleDeleteCompleted = useCallback(() => {
    let newTodos = deleteCompleted();
    setItems([...newTodos]);
  }, []);

  const handleDelete = useCallback((id: number) => {
    let newTodos = deleteTodo(id);
    setItems([...newTodos]);
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
        handleDelete={handleDelete}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
};
