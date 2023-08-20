import React, {useEffect} from 'react';
import {Provider as ProviderRedux} from 'react-redux';

import Route from 'route';
import store from 'store/configure-store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <ProviderRedux store={store}>
        <Route />
      </ProviderRedux>
    </>
  );
};

export default App;
