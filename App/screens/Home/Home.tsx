import React from 'react';
import { View, StatusBar } from 'react-native';

import { colors } from '../../constants';

import styles from './Home.styles';

const Home = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
    </View>
  );
};

export default Home;
