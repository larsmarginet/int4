import React from 'react';
import { useStore } from './hooks/UseStore';

function App() {
  const store = useStore();
  return (
    <div className="App">
      {store.arts.map(art => (
          <p key={art.name}>{art.name}</p>
      ))}
    </div>
  );
}

export default App;
