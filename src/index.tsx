import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { LoginForm } from "./components/LoginForm";

import './index.scss';

const App:React.FC<any> = (props) => (
  <Provider store={props.store()}>
    <ConnectedRouter history={history}>
      <div className="App">
        <LoginForm />
      </div>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
