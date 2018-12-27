import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

// Components
import { Navbar } from './components/Navbar/';
import { Header } from './components/Header/';
import { Container } from './components/Container/';
import { Footer } from './components/Footer/';
import  NotFound  from './pages/NotFound';

// Pages
import Home from './pages/Home';
import Profiles from './pages/Profiles';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />

          <Header />

          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/myprofile/" exact component={Profiles} />
              {/* Crear pagina/ruta para el error 404 */}
              <Route component={ NotFound } />
            </Switch>
          </Container>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
