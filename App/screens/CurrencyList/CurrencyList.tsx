import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../config/Navigation';
import { StatusBar, FlatList, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import currencies from '../../data/currencies.json';
import { RowItem, Divider } from '../../components';
import { colors } from '../../constants';

type CurrencyListNavProp = StackNavigationProp<RootStackParamList, 'CurrencyList'>;

type Props = {
  navigation: CurrencyListNavProp;
};

const CurrencyList: FC<Props> = ({ navigation }) => {
  const insets = useSafeArea();

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
          return (
            <RowItem
              text={item}
              onPress={() => {
                navigation.pop();
              }}
            />
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
