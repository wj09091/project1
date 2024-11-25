import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";

const Controller = () => {
  const { dispatch } = useContext(VoteContext);

  const handleSetCount = () => {
    dispatch({ type: "increase", value: 1 });
  };

  const handleSetCount1 = () => {
    dispatch({ type: "increase1", value: 1 });
  };

  return (
    <div>
      <button onClick={handleSetCount}>찬성</button>
      <button onClick={handleSetCount1}>반대</button>
    </div>
  );
};

export default Controller;
