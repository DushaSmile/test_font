import * as types from '../actions/types';

const requestsReducer = (state = {}, action) => {

    switch (action.type) {

        case types.API_CALL_SUCCESSFUL:
            const newState = Object.assign({}, state, action.response);
            return Object.assign({}, state, action.response);

        case types.API_CALL_FAILURE:
            alert(`Failed to request. ${action.error}`);
            return state;

        default:
            return state

    }

};

export default requestsReducer;