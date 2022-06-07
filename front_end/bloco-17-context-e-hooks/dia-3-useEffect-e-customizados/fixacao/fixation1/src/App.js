import React, { useState } from 'react';
import NumberComponent from './NumberComponent';

function App() {
  const [render, setRender] = useState(false);

  return (
    <div>
        <button
          type='button'
          onClick={() => setRender(!render)}
        >
          Create Timer
        </button>
        {render && <NumberComponent />}
    </div>
  );
}

export default App;
