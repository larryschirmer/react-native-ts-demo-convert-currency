import React, { FC } from 'react';
import { TouchableOpacity, StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';

import styles from './Button.styles';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  customStyles?: StyleProp<ViewStyle>;
};

const Button: FC<Props> = ({ onPress = () => {}, customStyles, children = null }) => {
  return (
    <TouchableOpacity {...{ onPress }} style={[styles.button, customStyles]}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
