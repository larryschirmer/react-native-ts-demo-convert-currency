import React, { FC } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';

import styles from './Button.styles';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  customStyles?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const Button: FC<Props> = ({
  onPress = () => {},
  customStyles,
  children = null,
  disabled = false,
}) => {
  return (
    <TouchableOpacity {...{ onPress, disabled }} style={[styles.button, customStyles]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
