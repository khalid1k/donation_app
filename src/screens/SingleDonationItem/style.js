const { StyleSheet } = require('react-native');
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
});
