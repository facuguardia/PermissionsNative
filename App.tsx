import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {PermissionsProvider} from './src/context/PermissionsContext';

const AppStore = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

function App() {
  return (
    <NavigationContainer>
      <AppStore>
        <Navigator />
      </AppStore>
    </NavigationContainer>
  );
}

export default App;
