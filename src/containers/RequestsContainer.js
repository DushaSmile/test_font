// React & Redux
import React from 'react';
import { connect } from 'react-redux';

// Components
import Table from '../components/Table/Table';

// Actions
import { requestData } from "../actions/requestData";

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
                <button type="button" className="btn btn-success" >Add new</button>
                <Table requests={this.props.requests} />
            </div>
        )
    }

}

// map Redux state to a prop
const mapStateToProps = state => ({requests: state.requests});

// map requestData action creator to a getRequest prop
const mapDispatchToProps = dispatch => {
    return {
        getRequests: url => {
            dispatch(requestData(url))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(RequestsContainer);