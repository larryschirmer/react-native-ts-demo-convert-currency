import React from 'react';
import { View, StatusBar, Image } from 'react-native';

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
    </View>
  );
};

export default Home;
