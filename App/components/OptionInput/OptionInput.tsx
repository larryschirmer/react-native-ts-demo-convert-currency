import React, { FC } from 'react';
import { View, TouchableOpacity, Text, TextInput, GestureResponderEvent } from 'react-native';

import styles from './OptionInput.styles';
import { conditionalStyles } from '../../util';

type Props = {
  text: string;
  value: string;
  onButtonPress?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
};

const OptionInput: FC<Props> = (props) => {
  const {
    text,
    value,
    onButtonPress = () => {},
    onChangeText = () => {},
    disabled = false,
  } = props;

  const inputStyles = conditionalStyles([
    { style: styles.wrapper },
    { style: styles.wrapperDisabled, enabled: disabled },
  ]);

  return (
    <View style={inputStyles}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput
        {...{ value, onChangeText }}
        style={styles.input}
        keyboardType="numeric"
        editable={disabled}
      />
    </View>
  );
};

export default OptionInput;
