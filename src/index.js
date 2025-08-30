import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import extendTheme
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'react-loading-skeleton/dist/skeleton.css';
import App from './App';
import './index.css';
// 2. Create a theme instance (can be empty to use defaults)
const theme = extendTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 3. Pass the theme as a prop to the provider */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);