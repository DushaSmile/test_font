// Redux Saga
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Action Types
import * as types from '../actions/types';

// Actions
import { getRequests, getRequestFailed, getRequestsSuccess } from '../actions/getRequestsActions';

// AJAX request to API
async function getRequestsAjax() {
    const api = 'http://localhost:3000/requests';
    const response = await fetch(api);
    return response.json();
}

// worker
function* getRequestsWorker() {
    try {
        const data = yield call(getRequestsAjax);
        yield put(getRequestsSuccess(data));
    } catch (e) {
        yield put(getRequestFailed(e));
        console.log('error');
    }
}

// watcher
export default function* getRequestWatcher() {
    yield takeLatest(types.API_CALL_BEGIN, getRequestsWorker)
}