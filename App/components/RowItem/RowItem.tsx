import React, { FC } from 'react';
import { Text, View, GestureResponderEvent } from 'react-native';

import { Button } from '../';

import styles from './RowItem.styles';

type Props = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const RowItem: FC<Props> = ({ text, onPress = () => {}, children }) => {
  return (
    <Button {...{ onPress }} customStyles={styles.row}>
      <Text style={styles.text}>{text}</Text>
      <View>{children}</View>
    </Button>
  );
};

export default RowItem;
