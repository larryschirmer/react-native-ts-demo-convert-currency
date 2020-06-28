import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList as MainStackParams } from './stacks/MainStack';
import ModalStackScreen, { RootStackParamList as ModalStackParams } from './stacks/ModalStack';

export type NavigationParams = MainStackParams & ModalStackParams;

const Navigation = () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);

export default Navigation;
