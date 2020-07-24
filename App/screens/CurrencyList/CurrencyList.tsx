import React, { FC, useContext } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParams } from '../../config/Navigation';
import { StatusBar, FlatList, View, Image } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import currencies from '../../data/currencies.json';
import { RowItem, Divider } from '../../components';
import { colors } from '../../constants';
import { Currency } from '../../state';

import checkBackgroundIcon from '../../assets/images/checkBackground.png';

type Nav = StackNavigationProp<NavigationParams, 'CurrencyList'>;
type Route = RouteProp<NavigationParams, 'CurrencyList'>;

type Props = {
  navigation: Nav;
  route: Route;
};

const CurrencyList: FC<Props> = ({ navigation, route }) => {
  const insets = useSafeArea();
  const { activeCurrency } = route.params ?? {};
  const { baseCurrency, changeCurrencyBase, changeCurrencyQuote } = useContext(Currency.Context);

  const handleSetCurrency = (selectedCurrency: string) => {
    if (activeCurrency === baseCurrency) {
      changeCurrencyBase(selectedCurrency);
    } else {
      changeCurrencyQuote(selectedCurrency);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          const selected = activeCurrency === item;
          return (
            <RowItem
              text={item}
              onPress={() => {
                handleSetCurrency(item);
                navigation.pop();
              }}
            >
              {selected && <Image source={checkBackgroundIcon} style={{ width: 20, height: 20 }} />}
            </RowItem>
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <Divider />}
        ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
      />
    </View>
  );
};

export default CurrencyList;
