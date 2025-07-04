import React, { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div style={{ padding: '10px', border: '1px solid #eee', borderRadius: '6px', display: 'inline-block' }}>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '8px' }}>Decrement</button>
    </div>
  );
}

export default Counter; 