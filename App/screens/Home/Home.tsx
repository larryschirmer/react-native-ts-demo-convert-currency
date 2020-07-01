import React, { FC, useState } from 'react';
import { View, StatusBar, Image, Text, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParams } from '../../config/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

import { OptionInput, KeyboardSpacer, Button } from '../../components';

import { colors } from '../../constants';

import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo.png';
import reverseImage from '../../assets/images/reverse.png';
import solidCogImage from '../../assets/images/solid-cog.png';

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

type Nav = StackNavigationProp<NavigationParams, 'Home'>;

type Props = {
  navigation: Nav;
};

const Home: FC<Props> = ({ navigation }) => {
  const [{ rate, base, quote }, setConversion] = useState(conversionRates['USD']);
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const today = format(new Date(), 'MMM do, yyyy');

  const handleOptionSelect = (inputType: string, activeCurrency: string) => () => {
    switch (inputType) {
      case 'base':
        navigation.push('CurrencyList', { title: 'Base Currency', activeCurrency });
        break;
      case 'quote':
        navigation.push('CurrencyList', { title: 'Quote Currency', activeCurrency });
        break;
      default:
    }
  };

  const renderCurrencyOption = (currency: string) => {
    return (
      <OptionInput
        optionText={currency}
        value="123"
        handleOptionSelect={handleOptionSelect('base', currency)}
        onChangeText={(text) => console.log(text)}
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <SafeAreaView style={styles.header} edges={['top']}>
        <Button customStyles={styles.headerBtn} onPress={() => navigation.push('Options')}>
          <Image style={styles.headerBtnImage} source={solidCogImage} />
        </Button>
      </SafeAreaView>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image style={styles.backgroundImage} source={backgroundImage} resizeMode="contain" />
            <Image style={styles.foregroundImage} source={logoImage} resizeMode="contain" />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          {renderCurrencyOption('USD')}
          {renderCurrencyOption('GBP')}
          <Text style={styles.inputCaption}>{`1 ${base} = ${rate} ${quote} as of ${today}`}</Text>
          <Button customStyles={styles.reverseBtn} onPress={() => {}}>
            <Image source={reverseImage} style={styles.reverseBtnImage} />
            <Text style={styles.reverseBtnText}>Reverse Currencies</Text>
          </Button>
          <KeyboardSpacer onChange={(isOpen) => setScrollEnabled(isOpen)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
