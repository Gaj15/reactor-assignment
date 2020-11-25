import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import { Container, Row } from 'react-bootstrap';

import AppNavbar from './components/AppNavbar';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import { shirtProps, jacketProps, accessoriesProps } from './utils';

const App = () => {
  return <>
    <Router>
    <AppNavbar />
      <Container fluid>
          <Row className="justify-content-center">
          <Route path="/" strict={true} />
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/shirts' component={ () => <Products {...shirtProps}/>} />
          <Route path='/jackets' component={ () => <Products {...jacketProps}/>} />
          <Route path='/accessories' component={ () => <Products {...accessoriesProps}/>} />
          </Row>
        </Container>
    </Router>
  </>
}

export default App;
