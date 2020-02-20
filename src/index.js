// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// Utilities
import * as serviceWorker from './serviceWorker';
// Components
import App from './components/App';
// CSS
import './styles/index.css';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
