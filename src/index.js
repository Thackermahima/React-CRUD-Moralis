import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
})
const appId = "kU0txaqmO7PFqfz0TLccnlX40pZmswCvV4fJEnfO"
const serverUrl = "https://vmoodrzfgpta.usemoralis.com:2053/server"
root.render(
  <React.StrictMode>
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
      <BrowserRouter>
      <App />

      </BrowserRouter>
    </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
