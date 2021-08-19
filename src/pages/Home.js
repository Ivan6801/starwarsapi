import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconfLogoImage from '../images/logo-StarWars.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col">
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              <h1>The Star Wars API</h1>
              <Link className="btn btn-warning" to="/badges">
                Show
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
