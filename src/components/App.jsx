import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./Landing";
import Curriculum from "./Curriculum";
import Projects from "./Projects";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      {/* <Switch> */}
      <Route exact path="/intro" component={Landing} />
      <Route exact path="/curriculum" component={Curriculum} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      {/* </Switch> */}
      {/* {routerList} */}
    </Router>
  );
}
