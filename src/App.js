// import { render } from '@testing-library/react';
import React, { Component } from 'react'
// import Counter from './components/counter'; //conponent 호출
// import Movie from './components/Movie';
// import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Checkbox from './components/Checkbox.tsx';
import Context from './components/Context';
// import Drag from './components/dragdrop/Drag';
import ListDrage from './components/dragdrop/ListDrage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (//JSX문법 (class x, className o)
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/movies" exact>
                <Context />
              </Route>
              <Route path="/users" exact>
                <Users />
              </Route>
              <Route path="/" exact>
                <h1>Main</h1>
                <Checkbox />
              </Route>
              <Route>
                <Route path="/test" exact>
                  <ListDrage />
                </Route>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      
    );
}}

export default App;
