import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks'
import Router from './router/index';
import {Navbar} from './components/index'
import { GlobalStyles, client } from './constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <GlobalStyles />
          <div className={'main-container'}>
            <Navbar/>
            <Router/>
            <ToastContainer/>
          </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
