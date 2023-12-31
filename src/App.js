import React, { useState, useRef } from 'react';
import BasicTable from './components/BasicTable';

function App() {
  const [reset, setReset] = useState(false);
  const tableRef = useRef(null);

  const resetTable = () => {
    setReset(!reset);
  };

  return (
    <div className="App">
      <button onClick={resetTable}>Reset</button>
      <BasicTable reset={reset} setReset={setReset} ref={tableRef} />
    </div>
  );
}

export default App;