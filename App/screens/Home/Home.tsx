import React, { FC, useState, useContext, useEffect, useMemo } from 'react';
import { View, StatusBar, Image, Text, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParams } from '../../config/Navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { format } from 'date-fns';

import { OptionInput, KeyboardSpacer, Button } from '../../components';
import { Currency } from '../../state';

import { colors } from '../../constants';

import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo.png';
import reverseImage from '../../assets/images/reverse.png';
import solidCogImage from '../../assets/images/solid-cog.png';

import styles from './Home.styles';

type Nav = StackNavigationProp<NavigationParams, 'Home'>;

type Props = {
  navigation: Nav;
};

const Home: FC<Props> = ({ navigation }) => {
  const { baseCurrency, quoteCurrency, swapCurrencies, fetchTime, rates } = useContext(
    Currency.Context,
  );

  const currentRate = useMemo(() => {
    return rates?.[quoteCurrency] ?? 0;
  }, [rates]);

  const [baseInput, setBaseInput] = useState('100');
  const [quoteInput, setQuoteInput] = useState((parseFloat(baseInput) * currentRate).toFixed(2));
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const latestFetchTime = !!fetchTime ? format(new Date(fetchTime), 'MMM do, yyyy') : '—';

  // update quote value on rate update
  useEffect(() => {
    setQuoteInput((parseFloat(baseInput) * currentRate).toFixed(2));
  }, [currentRate]);

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

  const handleReverseCurrency = () => {
    swapCurrencies();
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
          <OptionInput
            optionText={baseCurrency}
            value={baseInput}
            handleOptionSelect={handleOptionSelect('base', baseCurrency)}
            onChangeText={(value) => {
              setBaseInput(value);
              setQuoteInput((parseFloat(value || '0') * currentRate).toFixed(2));
            }}
          />
          <OptionInput
            disabled
            optionText={quoteCurrency}
            value={quoteInput}
            handleOptionSelect={handleOptionSelect('quote', quoteCurrency)}
            onChangeText={() => {}}
          />
          <Text
            style={styles.inputCaption}
          >{`1 ${baseCurrency} = ${currentRate} ${quoteCurrency} as of ${latestFetchTime}`}</Text>
          <Button customStyles={styles.reverseBtn} onPress={handleReverseCurrency}>
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
