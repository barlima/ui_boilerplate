import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const token = localStorage.getItem('jwt');

// Find a way to rerender app.js

if (token) {
  store.dispatch(login(token));
  renderApp();
  if (history.location.pathname === '/login') {
    history.push('/dashboard');
  }
} else {
  store.dispatch(logout());
  renderApp();
  if (history.location.pathname !== '/signup') {
    history.push('/login');
  }
};

