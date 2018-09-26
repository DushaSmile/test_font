import { all } from 'redux-saga/effects';
import loadRequests from './getRequestsSaga';

export default function* rootSaga() {
    yield all([
        loadRequests()
    ]);
}