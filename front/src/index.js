import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux';
import { CookiesProvider } from 'react-cookie';
//
import configureStore from './store/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter history={history}>
      <Provider store={store}>
        <Route path="/" component={App} />
      </Provider>
    </BrowserRouter>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
