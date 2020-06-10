import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useStore } from './hooks/UseStore';
import Navigation from "./components/Ui/Navigation/Navigation"
import Home from './components/Screens/Home/Home';
import Characters from './components/Screens/Characters/Characters';

function App() {
  const store = useStore();
  return (
    <div className="App">
      <Navigation title={"De Kruisoprichting"} image={"cross"}/>
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
