import React from 'react';
import ReactDOM from 'react-dom';
import AllProducts from './AllProducts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllProducts />, div);
  ReactDOM.unmountComponentAtNode(div);
});