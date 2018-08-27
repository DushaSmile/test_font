// React & Router
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Container
import Requests from '../containers/RequestsContainer';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Requests} />
                {/*<Route path="add" />*/}
            </div>
        </Router>
    )
};

export default App;