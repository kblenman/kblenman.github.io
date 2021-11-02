import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import { Route, Switch } from 'react-router';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'home',
    }
  }

  render() {
    return (
    <div className="App fc-dark-bluegray">
      {/* Header component displays on all routes */}
      <Header/>

      {/* If route is 'home', display AboutMe component. else, display ProjectsPage
      component.*/}
      <Switch>
        <Route path='/' component={AboutMe} exact />
        <Route path='/projects' component={ProjectsPage} />
      </Switch>
    </div>
    );
  }
}

export default App;
