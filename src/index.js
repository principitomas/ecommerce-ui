import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import store from './config/store'
import App2 from "./App2";

const app = <Provider store={store}>
    <BrowserRouter>
        <App2/>
    </BrowserRouter>
</Provider>

ReactDOM.render(app, document.getElementById('root'));

