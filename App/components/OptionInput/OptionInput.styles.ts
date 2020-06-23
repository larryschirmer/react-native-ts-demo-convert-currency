import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    flexDirection: 'row',
  },
  wrapperDisabled: {
    backgroundColor: colors.offWhite,
  },
  button: {
    backgroundColor: colors.white,
    borderRightColor: colors.border,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 15,
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: colors.textLight,
  },
});

export default styles;
