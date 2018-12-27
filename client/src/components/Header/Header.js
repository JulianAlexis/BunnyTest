import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="masthead" style={{ backgroundImage: 'url(images/foto_perfil.png)' }}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Bio In</h1>
                <span className="subheading">TorreBio and Linkedin Profile</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
