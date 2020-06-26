import React from 'react';
import { SafeAreaView, ScrollView, Alert, StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../constants';

import { RowItem, Divider } from '../../components';
import { openUrl } from '../../util';

import styles from './Options.styles';

const links = {
  basics: 'https://learn.handlebarlabs.com/p/react-native-basics-build-a-currency-converter',
  byExample: 'https://www.reactnativebyexample.com/',
};

const Options = () => {
  const handleError = () => {
    Alert.alert('Sorry, something went wrong.', 'Please try again later.');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem text="Themes" onPress={() => alert('todo')}>
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        </RowItem>
        <Divider />
        <RowItem text="React Native Basics" onPress={() => openUrl(links.basics, handleError)}>
          <Entypo name="export" size={20} color={colors.blue} />
        </RowItem>
        <Divider />
        <RowItem
          text="React Native by Example"
          onPress={() => openUrl(links.byExample, handleError)}
        >
          <Entypo name="export" size={20} color={colors.blue} />
        </RowItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
