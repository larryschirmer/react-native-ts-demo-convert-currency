import { Linking } from 'react-native';

const openUrl = (url: string, handleError?: () => void) => {
  Linking.openURL(url).catch(handleError);
};

export default openUrl;
