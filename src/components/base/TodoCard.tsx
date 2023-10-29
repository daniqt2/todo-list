import React, { useCallback, useState } from "react";

import Button from "@atlaskit/button";
import { Checkbox } from "@atlaskit/checkbox";
import __noop from "@atlaskit/ds-lib/noop";

interface IPropsTodoCard {
  description: string;
  done?: boolean;
  handleDelete: () => void;
  handleComplete: (val: boolean) => void;
}
export const TodoCard: React.FC<IPropsTodoCard> = ({
  description,
  done,
  handleDelete,
  handleComplete,
}) => {
  const [isDone, setIsDone] = useState(done);

  const toggle = () => {
    handleComplete(!isDone);
    setIsDone((prev) => !prev);
    console.log(isDone);
  };

  return (
    <div className="flex w-full mb-2  rounded-lg hover:bg-slate-400 bg-secondary py-4 px-2">
      <div className="w-full">
        <Checkbox
          className="hover:cursor-pointer"
          isChecked={isDone}
          value={description}
          label={description}
          onChange={toggle}
          testId="cb-default"
        />
      </div>
      <Button
        appearance="danger"
        className="float-right"
        onClick={handleDelete}
      >
        x
      </Button>
    </div>
  );
};
