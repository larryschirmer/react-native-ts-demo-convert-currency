import React from 'react';
import { SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../constants';

import styles from './Options.styles';

const Options = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
        <Entypo name="chevron-right" size={20} color={colors.blue} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native Basics</Text>
        <Entypo name="export" size={20} color={colors.blue} />
      </TouchableOpacity>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>React Native by Example</Text>
        <Entypo name="export" size={20} color={colors.blue} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Options;
