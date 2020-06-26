import React, { FC, useState } from 'react';
import { View, StatusBar, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../config/Navigation';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

import { OptionInput, KeyboardSpacer } from '../../components';

import { colors } from '../../constants';

import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo.png';

import styles from './Home.styles';

const conversionRates = {
  USD: {
    rate: 0.89824,
    base: 'USD',
    quote: 'GBP',
  },
  GBP: {
    rate: 1.1133,
    base: 'GBP',
    quote: 'USD',
  },
};

type HomeNavProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeNavProp;
};

const Home: FC<Props> = ({ navigation }) => {
  const [{ rate, base, quote }, setConversion] = useState(conversionRates['USD']);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const today = format(new Date(), 'MMM do, yyyy');

  const handleOptionSelect = (inputType: string) => () => {
    switch (inputType) {
      case 'base':
        navigation.push('CurrencyList', { title: 'Base Currency' });
        break;
      case 'quote':
        navigation.push('CurrencyList', { title: 'Quote Currency' });
        break;
      default:
    }
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <SafeAreaView style={styles.header} edges={['top']}>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image style={styles.backgroundImage} source={backgroundImage} resizeMode="contain" />
            <Image style={styles.foregroundImage} source={logoImage} resizeMode="contain" />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <OptionInput
            optionText="USD"
            value="123"
            handleOptionSelect={handleOptionSelect('base')}
            onChangeText={(text) => console.log(text)}
          />
          <OptionInput
            optionText="GBP"
            value="123"
            handleOptionSelect={handleOptionSelect('quote')}
            onChangeText={(text) => console.log(text)}
          />
          <Text style={styles.inputCaption}>{`1 ${base} = ${rate} ${quote} as of ${today}`}</Text>
          <KeyboardSpacer onChange={(isOpen) => setScrollEnabled(isOpen)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
