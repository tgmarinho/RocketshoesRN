import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';

import NavigationService from './services/navigation';

import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Routes
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    />
  </>
);

export default App;
