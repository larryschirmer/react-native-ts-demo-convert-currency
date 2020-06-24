import React, { useState } from 'react';
import { View, StatusBar, Image, Text } from 'react-native';
import { format } from 'date-fns';

import { OptionInput } from '../../components';

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

const Home = () => {
  const [{ rate, base, quote }, setConversion] = useState(conversionRates['USD']);
  const today = format(new Date(), 'MMM do, yyyy');

  const handleOptionChange = (option: string) => {
    if (option === 'USD' || option === 'GBP') setConversion(conversionRates[option]);
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logo}>
        <Image style={styles.backgroundImage} source={backgroundImage} resizeMode="contain" />
        <Image style={styles.foregroundImage} source={logoImage} resizeMode="contain" />
      </View>
      <Text style={styles.textHeader}>Currency Converter</Text>
      <OptionInput
        options={['USD', 'GBP']}
        value="123"
        onChangeOption={handleOptionChange}
        onChangeText={(text) => console.log(text)}
      />
      <Text style={styles.inputCaption}>{`1 ${base} = ${rate} ${quote} as of ${today}`}</Text>
      <Text>123</Text>
    </View>
  );
};

export default Home;
