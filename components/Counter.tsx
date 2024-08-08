import { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      style={{
        borderRadius: "8px",
        border: "1px solid transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        backgroundColor: "1a1a1a",
        cursor: "pointer",
        transition: "border-color 0.25s",
      }}
    >
      count is {count}
    </button>
  );
}
