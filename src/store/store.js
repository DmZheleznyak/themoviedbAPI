import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga'
import persistState from 'redux-localstorage'

const sagaMiddleware = createSagaMiddleware()

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 

const store = createStore( 
    rootReducer,
    compose(	
        applyMiddleware( sagaMiddleware ), 
        persistState(), 
        reduxDevTools	
        )	
)

sagaMiddleware.run( rootSaga )


export default store;