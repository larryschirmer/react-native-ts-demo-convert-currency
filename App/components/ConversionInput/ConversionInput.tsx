import React, { FC } from 'react';
import { View, TouchableOpacity, Text, TextInput, GestureResponderEvent } from 'react-native';

import styles from './ConversionInput.styles';

type Props = {
  text: string;
  value: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
};

const ConversionInput: FC<Props> = (props) => {
  const { text, value, onButtonPress = () => {}, onChangeText = () => {} } = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput {...{ value, onChangeText }} style={styles.input} keyboardType="numeric" />
    </View>
  );
};

export default ConversionInput;
