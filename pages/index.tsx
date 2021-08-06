import React, { useEffect } from "react";
import useCounter from "../lib/useCounter.ts";

export default function Home() {
  const [count, isSyncing, increase, decrease] = useCounter();

  return (
    <div>
      <button>click me!</button>
    </div>
  );
}
