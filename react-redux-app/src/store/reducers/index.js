// store/reducers/index.js
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import {userReducer} from "./userReducer"; // Import all other reducers here

const rootReducer = combineReducers({
    counter: counterReducer, //
    user:userReducer// This key ('counter') will be used to access the state managed by this reducer
    // Add other reducers here...
});

export default rootReducer;
