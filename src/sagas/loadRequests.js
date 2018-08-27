// Redux Saga
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Action Types
import * as types from '../actions/types';

// Actions
import { requestData, requestDataFailed, requestDataSuccess } from '../actions/requestData';

// AJAX request to API
async function getRequests(api) {
    const response = await fetch(api);
    return response.json();
}

// worker
function* loadRequestsWorker(action) {
    try {
        const data = yield call(getRequests, action.url);
        yield put(requestDataSuccess(data));
    } catch (e) {
        yield put(requestDataFailed(e));
        console.log('error');
    }
}

// watcher
export default function* loadRequestWatcher() {
    yield takeLatest(types.API_CALL_BEGIN, loadRequestsWorker)
}