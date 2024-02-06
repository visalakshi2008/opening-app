import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Login from './components/Login';

import UploadsTableData from './components/UploadsTableData';
import Uploading from './components/Uploading';
import SideMenuUpload from './components/SideMenuUpload';
import DummyDataLogin from './components/DummyDataLogin';
import reportWebVitals from './reportWebVitals';

const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {isLoggedIn ? null : <Login />}

    {/* <DummyDataLogin /> */}
    {/* <SideMenuUpload /> */}
    {/* <UploadsTableData /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
