import React, { useCallback } from "react";

import Button from "@atlaskit/button";
import { ITodo } from "../../models/todo.interface";
import { TodoCard } from "../base/TodoCard";
import { updateTodo } from "../../service/todo.service";

interface IPropsTodoList {
  items: ITodo[];
  handleDelete: (id: number) => void;
  handleDeleteCompleted: () => void;
}
export const TodoList: React.FC<IPropsTodoList> = ({
  items,
  handleDelete,
  handleDeleteCompleted,
}) => {
  const handleUpdate = (idx: number, done: boolean) =>
    updateTodo({ id: idx, done });

  const empty = useCallback(
    () => (
      <div className="w-full flex">
        <div className="text-white text-sm mx-auto">No tienes tareas</div>
      </div>
    ),
    []
  );

  if (!items.length) return empty();

  return (
    <>
      <div className=" w-full text-left md:p-4 h-3/4">
        <h1 className="mb-4 text-white text-sm">T A R E A S:</h1>
        {items.map((t, idx) => (
          <TodoCard
            handleComplete={(val) => handleUpdate(idx, val)}
            description={t.description}
            done={t.done}
            key={idx}
            handleDelete={() => handleDelete(idx)}
          />
        ))}
      </div>
      <div className="w-full flex my-2">
        <Button
          appearance="warning"
          className="mx-auto"
          onClick={() => handleDeleteCompleted()}
        >
          Eliminar tareas completadas
        </Button>
      </div>
    </>
  );
};
