import {combineReducers} from 'redux';
import generalInfo from './generalInfo';
import singers from './singers';

export default combineReducers({
    singers,
    generalInfo
});