import React from 'react';
import { View, StatusBar, Image, Text } from 'react-native';

import { OptionInput } from '../../components';

import { colors } from '../../constants';

import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo.png';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logo}>
        <Image style={styles.backgroundImage} source={backgroundImage} resizeMode="contain" />
        <Image style={styles.foregroundImage} source={logoImage} resizeMode="contain" />
      </View>
      <OptionInput
        options={['USD', 'GBP']}
        value="123"
        onChangeOption={(option) => alert(`btn press - ${option}`)}
        onChangeText={(text) => console.log(text)}
      />
      <Text>123</Text>
    </View>
  );
};

export default Home;
