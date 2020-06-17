import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './context';


ReactDOM.render(
<Provider>
<Router><App/></Router>
</Provider>,
document.querySelector('#root'));