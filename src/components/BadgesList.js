import React from 'react';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.name} ${this.props.badge.id}`}
        />
        <div className="Info-line">
          <div className="Badges-info">
           <p className="font-weight-bold">Name:</p> {this.props.badge.name}
          </div>
          <div className="Badges-info">
           <p className="font-weight-bold">Height:</p> {this.props.badge.height}
          </div>
          <div className="Badges-info">
           <p className="font-weight-bold">Mass:</p> {this.props.badge.mass}
          </div>
          <div className="Badges-info">
           <p className="font-weight-bold">Hair color:</p> {this.props.badge.hair_color}
          </div>
          <div className="Badges-info">
           <p className="font-weight-bold">Skin color:</p> {this.props.badge.skin_color}
          </div>
          <div className="Badges-info">
           <p className="font-weight-bold">Eye color:</p> {this.props.badge.eye_color}
          </div>
          <div className="Badges-info">
           <p className="font-weight-bold">Gender:</p> {this.props.badge.gender}
          </div>
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                <BadgesListItem badge={badge} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
