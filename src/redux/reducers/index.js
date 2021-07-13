import {combineReducers} from 'redux';
import albums from './albums';
import form from './form';
import generalInfo from './generalInfo';
import singers from './singers';
import songs from './songs';

export default combineReducers({
    generalInfo,
    singers,
    albums,
    songs,
    form
});