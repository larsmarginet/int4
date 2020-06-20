import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Ui/Navigation/Navigation"
import Home from './components/Screens/Home/Home';
import Avatars from './components/Screens/Avatars/Avatars';
import Characters from './components/Screens/Characters/Characters';
import Character from './components/Screens/Character/Character';
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
import { useStore } from './hooks/UseStore';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App({ hideLoader }) {
  const store = useStore();
  const history = useHistory();
  useEffect(() => {
    hideLoader();
  });

  if(store.avatar === 'avatar'){
    history.push("/avatar");
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/characters">
          <Navigation title={"Personages"} characters={true}/>
          <Characters />
        </Route>
        <Route path={"/character/:id"}>
          <Character />
        </Route>
        <Route path="/camera/:id">
          <Navigation title={"Kaartje"} characters={true}/>
          <Camera />
        </Route>
        <Route path="/overview">
          <Navigation title={"Kaart"} characters={true}/>
          <Overview />
        </Route>
        <Route path="/detailedOverview">
          <Navigation title={"Kortrijk"} characters={true}/>
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
        <Route path="/avatar">
          <Avatars />
        </Route>
        <Route path="/">
          <Navigation title={"Kaart"} characters={false}/>
          <Home />
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
