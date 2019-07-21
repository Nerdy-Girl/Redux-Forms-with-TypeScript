import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';

export interface IAppState {
  router: RouterState;
  form: any;
}
export const history = createBrowserHistory();
const rootReducer = (history: any) => combineReducers<IAppState>({
  router: connectRouter(history),
  form: formReducer
});

export default function configureStore(preloadedState?:any): Store<IAppState, any> {
  return createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))));
}
