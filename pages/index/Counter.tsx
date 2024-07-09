import { Button } from "@mantine/core";
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Button type="button" onClick={() => setCount((count) => count + 1)}>
      Counter {count}
    </Button>
  );
}
