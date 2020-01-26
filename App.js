import React from 'react';
import {Provider} from 'react-redux';

import {Home, ErrorBoundary} from './src/containers';
import store from './src/store';
import {Header} from './src/components/Header';

console.log('provider', Provider);
console.log('store', store);
console.log('Header', Header);
console.log('Error', ErrorBoundary);
console.log('Home', Home);

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
