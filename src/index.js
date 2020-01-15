import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';


//////REDUX
import {createStore} from "redux";
import { Provider } from 'react-redux';
//reducer
import rootReducer from './reducers/rootReducer';
const store = createStore(rootReducer);
// console.log(store.getState()) for debugging purposes


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));