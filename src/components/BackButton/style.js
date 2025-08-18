import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const { StyleSheet } = require('react-native');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdf8f8ff',
    width: horizontalScale(44),
    height: verticalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
