import React, { memo } from "react";

function Child({ countertwo }) {
  console.log("child render");

  return <div>Child</div>;
}

export default memo(Child);
