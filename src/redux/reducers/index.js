import {combineReducers} from 'redux';
import albums from './albums';
import generalInfo from './generalInfo';
import singers from './singers';
import songs from './songs';

export default combineReducers({
    singers,
    generalInfo,
    albums,
    songs
});