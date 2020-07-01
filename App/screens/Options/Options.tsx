import React from 'react';
import { SafeAreaView, ScrollView, Alert, StatusBar, Image } from 'react-native';
import { colors } from '../../constants';

import { RowItem, Divider } from '../../components';
import { openUrl } from '../../util';

import rightChevIcon from '../../assets/images/right-chevron.png';
import shareIcon from '../../assets/images/share.png';

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
          <Image style={styles.chevIcon} source={rightChevIcon} />
        </RowItem>
        <Divider />
        <RowItem text="React Native Basics" onPress={() => openUrl(links.basics, handleError)}>
          <Image style={styles.shareIcon} source={shareIcon} />
        </RowItem>
        <Divider />
        <RowItem
          text="React Native by Example"
          onPress={() => openUrl(links.byExample, handleError)}
        >
          <Image style={styles.shareIcon} source={shareIcon} />
        </RowItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
