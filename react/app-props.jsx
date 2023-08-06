// src/App.js

import React from 'react';
import Greeting from 'props.jsx';

function App() {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;
