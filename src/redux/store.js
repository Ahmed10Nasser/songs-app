import { applyMiddleware, createStore,compose } from "redux";
import { get_singers } from "./actions/singers";
import { rootSaga, sagaMiddleware } from "./middleware";
import reducers from "./reducers";


const store=createStore(reducers, compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

sagaMiddleware.run(rootSaga);

export default store;

store.dispatch(get_singers());