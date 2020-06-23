import React, { FC } from 'react';
import { TouchableOpacity, Text, View, GestureResponderEvent } from 'react-native';

import styles from './RowItem.styles';

type Props = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const RowItem: FC<Props> = ({ text, onPress, children }) => {
  return (
    <TouchableOpacity {...{ onPress }} style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <View>{children}</View>
    </TouchableOpacity>
  );
};

export default RowItem;
