import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootStackParamList as MainStackParams } from './stacks/MainStack';
import ModalStackScreen, { RootStackParamList as ModalStackParams } from './stacks/ModalStack';

import { Currency } from '../state';

export type NavigationParams = MainStackParams & ModalStackParams;

const Navigation = () => (
  <NavigationContainer>
    <Currency.Provider>
      <ModalStackScreen />
    </Currency.Provider>
  </NavigationContainer>
);

export default Navigation;
