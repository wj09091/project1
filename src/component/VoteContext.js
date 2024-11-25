import React, { createContext, useReducer } from "react";

export const VoteContext = createContext();

const initialState = {
  count: 0,
  count1: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.value };
    case "increase1":
      return { ...state, count1: state.count1 + action.value };
    default:
      return state;
  }
};

export const VoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VoteContext.Provider value={{ state, dispatch }}>
      {children}
    </VoteContext.Provider>
  );
};
