import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

export const styles = StyleSheet.create({
  paymentContainer: {
    marginHorizontal: horizontalScale(24),
  },
  donationAmountDescription: {
    marginTop: verticalScale(12),
  },
  button: {
    marginHorizontal: horizontalScale(24),
  },
  stripeCardForm: {
    height: verticalScale(150),
    marginTop: verticalScale(12),
  },
});
