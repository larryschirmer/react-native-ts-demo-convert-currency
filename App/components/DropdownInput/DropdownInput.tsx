import React, { FC, useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

import styles from './DropdownInput.styles';
import { conditionalStyles } from '../../util';

type Props = {
  options: string[];
  value: string;
  onChangeOption?: (option: string) => void;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
};

const DropdownInput: FC<Props> = (props) => {
  const {
    options,
    value,
    onChangeOption = () => {},
    onChangeText = () => {},
    disabled = false,
  } = props;

  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [showBtnPane, setShowBtnPane] = useState(false);

  const handleTogglePane = () => {
    setShowBtnPane(showPane => !showPane)
  };

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
    handleTogglePane();
    onChangeOption(option);
  };

  const inputStyles = conditionalStyles([
    { style: styles.wrapper },
    { style: styles.wrapperDisabled, enabled: disabled },
  ]);

  const buttonPaneStyles = conditionalStyles([
    { style: styles.buttonPane },
    { style: styles.hideButtonPane, enabled: !showBtnPane },
  ]);

  const paneTextStyles = (option: string) =>
    conditionalStyles([
      { style: styles.buttonPaneSelection },
      { style: styles.selectedOption, enabled: option === selectedOption },
    ]);

  return (
    <View style={inputStyles}>
      <View style={styles.button}>
        <TouchableOpacity onPress={handleTogglePane}>
          <Text style={styles.buttonText}>{selectedOption}</Text>
        </TouchableOpacity>
        <View style={buttonPaneStyles}>
          {options.map((option, i) => (
            <TouchableOpacity
              key={`${option}-${i}`}
              style={paneTextStyles(option)}
              onPress={() => handleSelectedOption(option)}
            >
              <Text style={styles.buttonPaneText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
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

export default DropdownInput;
