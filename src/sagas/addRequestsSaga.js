// Redux Saga
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Action types
import * as types from '../actions/types';

// Actions
import { addRequestsActions } from '../actions/addRequestsActions';

async function addRequestsAjax(request) {
    const api = 'http://localhost:3000/requests';
    const response = await fetch(api, {
        method: 'POST',
        // headers:
    })
}