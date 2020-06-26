import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants';
const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    paddingVertical: 0,
  },
  content: {},
  textHeader: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  inputCaption: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 14,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: screen.width * 0.45,
    height: screen.height * 0.45,
  },
  foregroundImage: {
    width: screen.width * 0.25,
    height: screen.height * 0.25,
    position: 'absolute',
  },
});

export default styles;
