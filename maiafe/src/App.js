import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Creando: <code>Mi Amigo Invisible APP 20</code>, una aplicación basada en react.
        </p>
        <a
          className="App-link"
          href="http://jihp.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Primera versión js y php.
        </a>
      </header>
    </div>
  );
}

export default App;
