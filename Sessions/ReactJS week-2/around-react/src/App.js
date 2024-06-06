import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './css/fma-general.css';
import './css/fma-responsive.css';
import './css/homeStyle.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/about', element: <About />},
  {path: '/services', element: <Services />}
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
