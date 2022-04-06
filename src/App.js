import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Start } from "./components/Start/Start";
import { About } from "./components/About/About";
import { Project } from "./components/Projects/Project";
import { Contact } from "./components/Contact/Contact";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [lang, setLang] = useState("");

  useEffect(()=>{
    window.onload = function () {
      var ln = navigator.language || navigator.userLanguage;
      return setLang(ln);
    };
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar lang={lang}/>
        <Switch>
          <Route path="/about">
            <About lang={lang}/>
          </Route>
          <Route path="/project">
            <Project lang={lang}/>
          </Route>
          <Route path="/contact">
            <Contact lang={lang}/>
          </Route>
          <Route path="/">
            <Start lang={lang}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
