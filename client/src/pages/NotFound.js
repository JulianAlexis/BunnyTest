import React, { Component } from 'react';
import './NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <div className="container-404">
        <h1 className="container-404-title">404</h1>
        <p className="container-404-message">Page not found</p>
      </div>
    );
  }
}

