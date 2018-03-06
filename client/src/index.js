import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import Routes from './routes';

import Login from './modules/account/Login';

const history = createHistory();

const store = configureStore({
  mware: routerMiddleware(history),
});

const Index = () => (
  <Provider store={store}>
    <Routes history={history} />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
