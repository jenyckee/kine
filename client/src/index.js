import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/login/LoginPage'
import store, { history } from './app/store';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/app" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
