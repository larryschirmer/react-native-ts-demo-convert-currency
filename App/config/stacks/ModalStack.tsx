import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStackScreen from './MainStack';

import { CurrencyList } from '../../screens';

import { Button } from '../../components';

import closeIcon from '../../assets/images/close.png';

export type RootStackParamList = {
  Main: undefined;
  CurrencyList: { title: string } | undefined;
};

export const ModalStack = createStackNavigator<RootStackParamList>();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }} />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ navigation, route }) => ({
        title: route.params?.title,
        headerLeft: () => null,
        headerRight: () => (
          <Button onPress={() => navigation.pop()} customStyles={{ paddingHorizontal: 20 }}>
            <Image source={closeIcon} style={{ width: 20, height: 20 }} />
          </Button>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default ModalStackScreen;
