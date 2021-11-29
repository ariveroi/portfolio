import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

import Background from "../common/Background";
import Education from "./Education";
import Main from "./Main";
import Skills from "./Skills";
import Experience from "./Experience";
import Settings from "../common/Sidebar/Settings";
import Padle from "./Projects/Padle";
import Lalberca from "./Projects/Lalberca";
import LWQ from "./Projects/LWQ";
import Flappy from "./Projects/Flappy";

function MobileApp() {
  return (
    <>
      <Background />
      <Router>
        <Settings mobile />
        <Route render={() => <Redirect to="/" />} />
        <Route exact path="/" component={Main} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/padle" component={Padle} />
        <Route exact path="/lalberca" component={Lalberca} />
        <Route exact path="/lwq" component={LWQ} />
        <Route exact path="/flappy" component={Flappy} />
      </Router>
    </>
  );
}

export { MobileApp };
