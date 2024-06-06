import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages';
import Alert from './alert';
import Button from './Button';



function App() {
  const[alertVisible, setAlertVisibility] = useState(false);
 /* return (
    <div><Alert>
      Hello <span>World </span>
      </Alert></div>
  );*/

  //Exampel BUTTON
  /* return (
    <div>
      <Button color='danger' onClick={() => console.log('Clicked')}>My Button</Button>
    </div>
   )*/

   //Alert Exampel
   return (
    <div>
    { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
  <Button color='danger' onClick={() => setAlertVisibility(true)}>My Button</Button>
  </div>
   )

}

export default App;
