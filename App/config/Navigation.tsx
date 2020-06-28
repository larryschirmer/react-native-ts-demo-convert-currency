import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import ModalStackScreen from './stacks/ModalStack';

const Navigation = () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);

export default Navigation;
