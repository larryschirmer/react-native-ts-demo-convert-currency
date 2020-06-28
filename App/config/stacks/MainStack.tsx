import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Options } from '../../screens';

export type RootStackParamList = {
  Home: undefined;
  Options: undefined;
};

export const MainStack = createStackNavigator<RootStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

export default MainStackScreen;
