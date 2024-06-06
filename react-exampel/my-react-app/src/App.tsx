import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListGroup from './Components/ListGroup';
import Display from './Components/Display';
import { useState } from 'react';


function App() {
  const [counter, setCounter] = useState(2);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <div>
   <ListGroup onClickFunctions={incrementCounter}/>
   <Display message={counter}/>
   </div>
  );
}

export default App;
