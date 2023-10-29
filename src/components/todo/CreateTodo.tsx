import React, { useState } from "react";

import Button from "@atlaskit/button";
import { Label } from "@atlaskit/form";
import TextArea from "@atlaskit/textarea";

interface IPorpsCreateTodo {
  handleAdd: (desc: string) => void;
}

export const CreateTodo: React.FC<IPorpsCreateTodo> = ({ handleAdd }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [desc, setDesc] = useState<string>("");

  const closeText = () => setIsOpen((prev) => !prev);

  const triggerAdd = () => {
    if (!desc) return;
    handleAdd(desc);
    setDesc("");
    closeText();
  };

  return isOpen ? (
    <>
      <Label htmlFor="area">Nueva tarea:</Label>
      <TextArea
        id="area"
        resize="auto"
        maxHeight="5vh"
        name="area"
        placeholder="Escribe tu nueva tarea aqui"
        onChange={(v) => setDesc(v.target.value)}
      />
      <div className="float-right mt-2">
        <Button appearance="primary" isDisabled={!desc} onClick={triggerAdd}>
          Añadir
        </Button>
        <Button className="ml-3" onClick={closeText}>
          Cancelar
        </Button>
      </div>
    </>
  ) : (
    <Button appearance="primary" onClick={closeText}>
      Añadir tarea
    </Button>
  );
};
