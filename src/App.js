import './App.css';
import React, { useState } from 'react';
import NewComponent from './FunctionalComponent';

function App() {
  let [name, setName] = useState("sreenu");
  return (
    <div className="App">
      <h1>I am the App Component</h1>
      <hr />
      <NewComponent />

    </div>
  );
}

export default App;
