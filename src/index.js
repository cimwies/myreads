import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import BooksApp from './BooksApp';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render( 
	<Router>
        <BooksApp />
    </Router>, 
    document.getElementById('root')
);

registerServiceWorker();
