import React, { createContext, useContext, useState } from "react";

interface IFilterState {
  element: string | undefined;
}

interface IFilterContext {
  filter: IFilterState;
  changeFilter(prop: string, val: any): void;
}

const FilterContext = createContext<IFilterContext | null>(null);

const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filter, setFilter] = useState<IFilterState>({
    element: undefined
  });

  const changeFilter = (prop: string, val: any) => {
    setFilter({ ...filter, [prop]: val });
  };

  return (
    <FilterContext.Provider value={{ filter, changeFilter }}>
      {children}
    </FilterContext.Provider>
  )
};

export default FilterProvider;

export const useFilter = () => {
  const ctx = useContext<IFilterContext | null>(FilterContext);

  if (!ctx) {
    throw new Error('useFilter must be used inside a Filter Provider.');
  }

  return { filter: ctx.filter, changeFilter: ctx.changeFilter };
}