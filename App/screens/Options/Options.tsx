import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../constants';

import { RowItem, Divider } from '../../components';

import styles from './Options.styles';

const Options = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <RowItem text="Themes" onPress={() => alert('todo')}>
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        </RowItem>
        <Divider />
        <RowItem text="React Native Basics" onPress={() => alert('todo')}>
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        </RowItem>
        <Divider />
        <RowItem text="React Native by Example" onPress={() => alert('todo')}>
          <Entypo name="chevron-right" size={20} color={colors.blue} />
        </RowItem>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Options;
