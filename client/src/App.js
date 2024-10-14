import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menubar from '../src/components/Menu-sidebar';
import { StyledEngineProvider } from '@mui/material/styles';
import Login from '../src/components/Login-form';
import AppRoutes from '../src/router/Router';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  );
}

export default App;
