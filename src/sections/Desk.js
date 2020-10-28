import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Add from './Add';
import Arrivals from './Arrivals';
import Catalogue from './Catalogue';

import '../styles/Desk.css';

const Desk = () => {
    return (
      <React.Fragment>
        <Router>
          <nav className="navbar-light navbar-expand-md nav-drop top-bar">
              <NavLink to="/" className="nav-link">
                <i class="fas fa-home" />
              </NavLink>
              <NavLink to="/Arrivals" className="nav-link">
                New Arrivals
              </NavLink>
              <NavLink to="/Add" className="nav-link">
              Add
              </NavLink>
              <NavLink to="/Catalogue" className="nav-link">
                Catalogue
              </NavLink>
          </nav>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/Arrivals">
              <Arrivals />
            </Route>
            <Route path="/Add">
              <Add />
            </Route>
            <Route path="/Catalogue">
              <Catalogue />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
};

export default Desk;
