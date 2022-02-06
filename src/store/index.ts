import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import ticketReducer from './reducers/TicketManageActions';
import ticketCheckReducer from './reducers/CheckingTicketActions';

const rootReducer = combineReducers({
    ticket: ticketReducer,
    ticketCheck: ticketCheckReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>

export default store;