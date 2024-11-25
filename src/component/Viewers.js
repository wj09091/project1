import React, { useContext } from "react";
import { VoteContext } from "./VoteContext";

const Viewer = () => {
  const { state } = useContext(VoteContext);

  return (
    <div>
      <h2>총 투표 수: {state.count + state.count1}</h2>
      <p>찬성: {state.count}</p>
      <p>반대: {state.count1}</p>
    </div>
  );
};

export default Viewer;
