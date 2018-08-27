import { all } from 'redux-saga/effects';
import loadRequests from './loadRequests';

export default function* rootSaga() {
    yield all([
        loadRequests()
    ]);
}