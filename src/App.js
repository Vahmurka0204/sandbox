import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => alert("TADAAAAAAAAAAAAAAAAAAAAAAAM")

  return (
    <div className="App">
      <h3>Type your data</h3>
      <input placeholder="login"/>
      <input type = "password" placeholder ="password"/>
      <input type="button" value = "don't touch me" onClick={handleClick}/>
    </div>
  );
}

export default App;
