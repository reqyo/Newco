import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Nav from './Nav';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="stuff">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />

        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
