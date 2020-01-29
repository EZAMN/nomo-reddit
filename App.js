import React from 'react';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Home, ErrorBoundary} from './src/containers';
import store from './src/store';
import {Header} from './src/components/Header';

EStyleSheet.build();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Header />
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
