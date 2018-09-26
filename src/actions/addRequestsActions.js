import * as types from './types';

export const addRequests = data => {
    return {
        type: types.ADD_REQUESTS,
        data: data
    }
};