import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Options, CurrencyList } from '../screens';

export type RootStackParamList = {
  Home: undefined;
  Options: undefined;
  CurrencyList: { title: string } | undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({
        title: route.params?.title,
      })}
    />
  </MainStack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);

export default Navigation;
