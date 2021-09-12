import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
// import { background, backgroundDark } from "./common/background";

import Settings from "./common/Settings";
import Background from "./common/Background";
import Landing from "./Landing";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import BackgroundDark from "./common/BackgroundDark";

const ThemeContext = createContext(false);

function App() {
  const [darkTheme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!darkTheme);
  };

  return (
    <ThemeContext.Provider value={darkTheme}>
      <Settings click={changeTheme} />
      {darkTheme ? <BackgroundDark /> : <Background />}
      <Router>
        {/* <Switch> */}
        <Route exact path="/">
          <Redirect to="/intro" />
        </Route>
        <Route exact path="/intro" component={Landing} />
        <Route exact path="/curriculum" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        {/* </Switch> */}
        {/* {routerList} */}
      </Router>
    </ThemeContext.Provider>
  );
}

export { App, ThemeContext };
