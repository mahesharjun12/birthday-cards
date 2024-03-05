import React from 'react';
import ReactDOM from 'react-dom/client';
// import Cal from './calculator/Cal';
// import App from './App';
import Wheater from './wheather/Wheater';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Wheater/>
    {/* <Cal/> */}
  </React.StrictMode>
);


