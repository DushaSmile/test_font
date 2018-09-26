// React & Router
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Containers
import Requests from '../containers/RequestsContainer';
import NewRequests from '../containers/NewRequestsContainer';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Requests} />
                <Route path="/add" component={NewRequests} />
            </div>
        </Router>
    )
};

export default App;