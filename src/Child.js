import React from "react";
import GrandChild from './GrandChild';

const Child = () => {
  return (
    <div>
      <h2>THIS IS A CHILD. JUST A CONTAINER FOR GRANDCHILD</h2>
      <GrandChild />
    </div>
  )
};

export default Child;