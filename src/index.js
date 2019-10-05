import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import NavigationService from './services/navigation';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  </Provider>
);

export default App;
