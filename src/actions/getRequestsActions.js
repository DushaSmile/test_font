import * as types from './types';

// Begin AJAX request action
export const getRequests = () => {
    return {
        type: types.API_CALL_BEGIN
    }
};

// AJAX success action
export const getRequestsSuccess = response => {
    return {
        type: types.API_CALL_SUCCESSFUL,
        response: response
    }
};

// AJAX failure action
export const getRequestFailed = error => {
    return {
        type: types.API_CALL_FAILURE,
        error: error
    }
};