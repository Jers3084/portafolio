import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Start } from './components/Start/Start';
import { About } from './components/About/About';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Start />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
