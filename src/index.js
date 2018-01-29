import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const colors = ['black', 'red'];

ReactDOM.render(
  <Spaceship name="Millennium Falcon" speed={10} />,
  document.getElementById('global')
);
