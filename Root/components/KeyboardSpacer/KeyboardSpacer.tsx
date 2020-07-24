import React, { FC, useState, useEffect } from 'react';
import { View, Keyboard, KeyboardEvent } from 'react-native';

import styles from './KeyboardSpacer.styles';

type Props = {
  onChange?: (isOpen: boolean) => void;
};

const KeyboardSpacer: FC<Props> = ({ onChange = () => {} }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const updateKeybpardSpace = (event: KeyboardEvent) => {
      const height = event.endCoordinates.height + 20;
      setKeyboardSpace(height);
      onChange(true);
    };
    const resetKeyboardSpace = () => {
      setKeyboardSpace(0);
      onChange(false);
    };

    const showKeyboard = Keyboard.addListener('keyboardDidShow', updateKeybpardSpace);
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', resetKeyboardSpace);

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardSpace }]} />;
};

export default KeyboardSpacer;
