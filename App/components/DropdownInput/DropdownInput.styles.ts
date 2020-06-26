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
    position: 'relative',
    backgroundColor: colors.white,
    borderRightColor: colors.border,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 15,
  },
  buttonPane: {
    width: 70,
    alignItems: 'center',
    position: 'absolute',
    bottom: 55,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 5
  },
  hideButtonPane: {
    display: 'none',
  },
  buttonPaneSelection: {
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  selectedOption: {
    backgroundColor: colors.offWhite,
  },
  buttonPaneText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: 'bold',
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
