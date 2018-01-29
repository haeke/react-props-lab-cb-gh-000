// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.speed}</h2>
        <h2>Rockets: {this.hasRockets()}</h2>
        <p>Colors: {this.props.colors.join(',')}</p>
      </div>
      );
  }
}

export default Spaceship;