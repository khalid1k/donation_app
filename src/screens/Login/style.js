import { StyleSheet } from 'react-native';
import { horizontalScale } from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
});
