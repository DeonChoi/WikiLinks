import React from 'react';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import MyLinks from './components/MyLinks';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
        <Nav />
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/search'} component={Search}/>
        <Route exact path={'/mywikilinks'} component={MyLinks}/>
      </Switch>
    </Router>
  );

}

export default App;
