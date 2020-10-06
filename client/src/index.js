import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './features/auth/LoginPage'
import RegisterPage from './features/auth/RegisterPage'
import store, { history } from './app/store';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'

import './custom.scss'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
