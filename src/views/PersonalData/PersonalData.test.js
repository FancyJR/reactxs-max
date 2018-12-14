import React from 'react';
import ReactDOM from 'react-dom';
import PersonalData from './PersonalData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
