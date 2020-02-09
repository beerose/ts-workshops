import React, { useState } from 'react';

const defaultState = {
  loading: false,
  isError: false,
};
export const Component = () => {
  const [state, setState] = useState<typeof defaultState>(defaultState);
  const [count, setCount] = useState(0);

  return (
    <div>
      {state.isError && <p>Ops!</p>}
      {state.loading && <p>Loading...</p>}
      Count: {count}
      <button onClick={() => setCount(p => ++p)}>Click</button>
    </div>
  );
};
