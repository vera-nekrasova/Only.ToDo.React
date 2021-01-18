import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from "./App/app.js";
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './App/store';
import { connect } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <ToDo />
    </Provider>,
    document.getElementById('root')
);
