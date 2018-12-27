import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="masthead" style={{ backgroundImage: 'url(/images/foto_perfil.png)',  opacity:0.5 }}>
        <div className="brand">Torre</div>
        <div className="up-border">Perfil</div>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <div className="profile-picture" >
                  <img src="/images/foto_perfil.png" alt="profile image" height="120" width="120" align="center"></img>
                </div>
                <h3 className="title3" style={{color:'#212529'}}>Bio In</h3>
                <span className="subheading">TorreBio and Linkedin Profile</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
