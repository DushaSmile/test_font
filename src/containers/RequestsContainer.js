// React & Redux & Router-Link
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Table from '../components/RequestsContainer/Table/Table';

// Actions
import { getRequests } from "../actions/getRequestsActions";

class RequestsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const api = 'http://localhost:3000/requests';
        this.props.getRequests(api);
    }

    render() {
        return(
            <div className="container">
                <h1>Requests</h1>
                <Link to="/add" className="btn btn-success btn-lg">Add new</Link>
                <Table requests={this.props.requests} />
            </div>
        )
    }

}

// map Redux state to a prop
const mapStateToProps = state => ({requests: state.requests});

// map getRequests action creator to a getRequest prop
const mapDispatchToProps = dispatch => {
    return {
        getRequests: url => {
            dispatch(getRequests(url))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RequestsContainer);