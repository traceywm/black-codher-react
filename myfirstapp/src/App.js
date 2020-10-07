import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const h1Style = { "fontSize":"50px", "color": "plum",
"textDecorationStyle": "wavy", "fontStyle":"italic" };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1
        style={h1Style}
        className ='myAppTitle'
        >
          'Hello World! Welcome to my first app!'
        </h1>
      </header>
    </div>
  );
}

export default App;
