import * as React from "react";

export default function Tasks() {
  const [times, setTimes] = React.useState(0);
  return (
    <div>
      <h1>Hello {times}</h1>
      <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
    </div>
  );
}
