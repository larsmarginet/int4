import React from 'react';
import { Switch, Route } from "react-router-dom";
import { useStore } from './hooks/UseStore';
import Navigation from "./components/Ui/Navigation/Navigation"
import Home from './components/Screens/Home/Home';
import Characters from './components/Screens/Characters/Characters';
import Camera from './components/Screens/Camera/QRCode';
import Overview from './components/Screens/Overview/Overview';
import DetailedOverview from './components/Screens/DetailedOverview/DetailedOverview';
import ChapterOne from './components/Chapters/ChapterOne/ChapterOne';

function App() {
  const store = useStore();
  return (
    <div className="App">
      <Navigation title={"De Kruisoprichting"} image={"cross"}/>
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/camera">
          <Camera />
        </Route>
        <Route path="/Overview">
          <Overview />
        </Route>
        <Route path="/DetailedOverview">
          <DetailedOverview />
        </Route>
        <Route path="/ChapterOne">
          <ChapterOne />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
