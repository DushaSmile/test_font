import * as types from './types';

// Begin AJAX request action
export const requestData = url => {
    return {
        type: types.API_CALL_BEGIN,
        url: url
    }
};

// AJAX success action
export const requestDataSuccess = response => {
    return {
        type: types.API_CALL_SUCCESSFUL,
        response: response
    }
};

// AJAX failure action
export const requestDataFailed = error => {
    return {
        type: types.API_CALL_FAILURE,
        error: error
    }
};