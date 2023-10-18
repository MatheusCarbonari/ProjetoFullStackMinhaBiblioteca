import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F3F3F3;
    --black: #000;
    --white: #FFFFFF;
    --azul: #007DDD;
    --font-medium: 500;
    --font-bold: 700
  }

  body {
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: var(--black);
    background-color: var(--background);
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
