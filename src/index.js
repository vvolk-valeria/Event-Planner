import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import {App} from './App';
import {store} from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider  store={store}>
    <BrowserRouter 
    // basename="/goit-react-hw-08-phonebook/"
    >
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


