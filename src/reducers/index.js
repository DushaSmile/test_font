import { combineReducers } from 'redux';
import requestsReducer from './requestsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    requests: requestsReducer,
    form: formReducer
});