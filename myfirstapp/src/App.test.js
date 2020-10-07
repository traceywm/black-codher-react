import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/edit/i);
  expect(linkElement).toBeInTheDocument();
});

// Add the following code snippet to the test file App.test.js:
it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<App />,div);
});