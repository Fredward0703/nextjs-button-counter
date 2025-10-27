import React from "react";
import Counter from "./counter";

function ProjectCounter() {
  return (
    <>
    <h1>Project Counter</h1>
    <Counter />
    <Counter initialCount={5} initialStep={2} />
    </>
  );
}

export default ProjectCounter;