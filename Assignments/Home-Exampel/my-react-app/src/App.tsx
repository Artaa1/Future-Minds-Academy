import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListGroup from './Component/ListGroup';

function App() {
  const items = [
    'New York',
    'San Franscisko',
    'Tokyo',
    'London',
    'Paris'
];

const handleSelectItem = (item:string) => {
  console.log(item);
} //Passing Functions via Promps
  return (
   <div><ListGroup items={items} heading='Cities' /*Passing Functions via Promps*/ onSelectItem={handleSelectItem} /></div>
  );
}

export default App;
