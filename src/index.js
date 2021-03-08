import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './shared/styles/main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Layout/Header/Header';
import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes />
      </main>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
