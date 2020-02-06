import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';

class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'home',
    }
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
    return (
    <div className="App fc-dark-bluegray">
      {/* Header component displays on all routes */}
      <Header route={this.state.route} onRouteChange={this.onRouteChange} />

      {/* If route is 'home', display AboutMe component. else, display ProjectsPage
      component.*/}
      { this.state.route === 'home' ?
        <AboutMe />
        :
        <ProjectsPage />
      } 
    </div>
    );
  }
}

export default App;
