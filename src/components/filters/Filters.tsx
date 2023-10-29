import React, { SyntheticEvent } from "react";

import { RadioGroup } from "@atlaskit/radio";

export type TFilter = "all" | "completed" | "not-completed";

interface IPropsFilters {
  handleFilter: (val: TFilter) => void;
}
interface IFilterOptions {
  value: TFilter;
  label: string;
}

export const Filters: React.FC<IPropsFilters> = ({ handleFilter }) => {
  const options: IFilterOptions[] = [
    { value: "all", label: "Todas las tareas" },
    { value: "completed", label: "Completadas" },
    { value: "not-completed", label: "No completadas" },
  ];

  const onChange = (event: SyntheticEvent<HTMLInputElement>) =>
    handleFilter(event.currentTarget.value as TFilter);

  return (
    <div className="my-10 bg-light p-4 w-48 rounded-lg bg-opacity-60">
      <RadioGroup
        defaultValue={"all"}
        options={options}
        onChange={onChange}
        aria-labelledby="radiogroup-label"
      />
    </div>
  );
};
