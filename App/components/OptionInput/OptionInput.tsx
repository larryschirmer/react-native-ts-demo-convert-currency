import React, { FC } from 'react';
import { View, TouchableOpacity, Text, TextInput, GestureResponderEvent } from 'react-native';

import styles from './OptionInput.styles';
import { conditionalStyles } from '../../util';

type Props = {
  optionText: string;
  value: string;
  handleOptionSelect?: (option: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
};

const OptionInput: FC<Props> = (props) => {
  const {
    optionText,
    value,
    handleOptionSelect = () => {},
    onChangeText = () => {},
    disabled = false,
  } = props;

  const inputStyles = conditionalStyles([
    { style: styles.wrapper },
    { style: styles.wrapperDisabled, enabled: disabled },
  ]);

  return (
    <View style={inputStyles}>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleOptionSelect}>
          <Text style={styles.buttonText}>{optionText}</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        {...{ value, onChangeText }}
        style={styles.input}
        keyboardType="numeric"
        editable={!disabled}
      />
    </View>
  );
};

export default OptionInput;
