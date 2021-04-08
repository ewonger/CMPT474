import React, { useState, useEffect }  from 'react';

// Components
import logo from './components/logo.svg';
import Homepage from './pages/Homepage';
import Pet from './pages/Pet';
import Create from './pages/Create';

// React Router DOM
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

export default function App() {

  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand href="/">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="a"
          /> {' '}
            Petfindr
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/create">Make a Post</Nav.Link>
          </Nav>
        </Navbar>

        <Switch>
          <Route path="/pet/:id">
            <Pet/>
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}