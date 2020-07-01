import React, { FC, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import Button from '../Button';

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
    setShowBtnPane((showPane) => !showPane);
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
        <Button onPress={handleTogglePane}>
          <Text style={styles.buttonText}>{selectedOption}</Text>
        </Button>
        <View style={buttonPaneStyles}>
          {options.map((option, i) => (
            <Button
              key={`${option}-${i}`}
              customStyles={paneTextStyles(option)}
              onPress={() => handleSelectedOption(option)}
            >
              <Text style={styles.buttonPaneText}>{option}</Text>
            </Button>
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
