import React, { useState } from "react";

import './App.css';
import * as constants from './appConstants'; 
import { TopBar } from './TopBar';
import { Content } from './Content';
import { AboutMe } from "./AboutMe";

function App() {
  const [currentContentVar, setCurrentContentVar] = useState(constants.EXPERIENCE);

  return (
    <div className="App" style={{display: 'flex', height: '100%'}}>
      <div id="left-half" style={{width: '75%'}}>
          <TopBar setCurrentContentVar={setCurrentContentVar} />
          {<Content contentVar={currentContentVar}/>}
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
