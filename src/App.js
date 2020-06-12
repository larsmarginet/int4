import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Ui/Navigation/Navigation"
import Home from './components/Screens/Home/Home';
import Characters from './components/Screens/Characters/Characters';
import Camera from './components/Screens/Camera/QRCode';
import Overview from './components/Screens/Overview/Overview';
import DetailedOverview from './components/Screens/DetailedOverview/DetailedOverview';
import ChapterOne from './components/Chapters/ChapterOne/ChapterOne';
import ChapterTwo from './components/Chapters/ChapterTwo/ChapterTwo';
import ChapterThree from './components/Chapters/ChapterThree/ChapterThree';
import ChapterFour from './components/Chapters/ChapterFour/ChapterFour';
import ChapterFive from './components/Chapters/ChapterFive/ChapterFive';
import ChapterSix from './components/Chapters/ChapterSix/ChapterSix';
import ChapterSeven from './components/Chapters/ChapterSeven/ChapterSeven';
import ChapterEight from './components/Chapters/ChapterEight/ChapterEight';

function App() {
  return (
    <div className="App">
      <Navigation title={"De Kruisoprichting"} image={"cross"}/>
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/camera/:id">
          <Camera />
        </Route>
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/detailedOverview">
          <DetailedOverview />
        </Route>
        <Route path="/chapterOne">
          <ChapterOne />
        </Route>
        <Route path="/chapterTwo">
          <ChapterTwo />
        </Route>
        <Route path="/chapterThree">
          <ChapterThree />
        </Route>
        <Route path="/chapterFour">
          <ChapterFour />
        </Route>
        <Route path="/chapterFive">
          <ChapterFive />
        </Route>
        <Route path="/chapterSix">
          <ChapterSix />
        </Route>
        <Route path="/chapterSeven">
          <ChapterSeven />
        </Route>
        <Route path="/chapterEight">
          <ChapterEight />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
