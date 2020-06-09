import React from 'react';
import { useStore } from './hooks/UseStore';
import Home from './components/Screens/Home';

function App() {
  const store = useStore();
  return (
    <div className="App">
      {store.arts.map(art => (
          <p key={art.name}>{art.name}</p>
      ))}
      <Home />
    </div>
  );
}

export default App;
