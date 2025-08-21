import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { styles } from './style';
import { globalStyle } from '../../assets/styles/globalStyle';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import config from 'react-native-config';
import {
  StripeProvider,
  CardForm,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
const Payment = ({ navigation }) => {
  const [isReady, setIsReady] = useState(false);
  const donationInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const user = useSelector(state => state.user);
  const { confirmPayment, loading } = useConfirmPayment();

  const handlePayment = async () => {
    try {
      const clientSecret = await fetchPaymentIntentClientSecrets();
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
      });
      if (error) {
        Alert.alert(
          'Error has occured with your payment',
          error.localizedMessage,
        );
      } else if (paymentIntent) {
        Alert.alert('The Payment was successfully confirmed!');
        navigation.goBack();
      }
    } catch (error) {
      console.log('function error:', error.message);
    }
  };

  const fetchPaymentIntentClientSecrets = async () => {
    try {
      const apiUrl = config.API_BASE_URL;
      const response = await axios.post(
        apiUrl,
        {
          email: user.email,
          currency: 'usd',
          amount: donationInformation.price * 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        },
      );
      if (response.data.clientSecret) {
        return response.data.clientSecret;
      } else {
        throw new Error('No client secret received');
      }
    } catch (error) {
      console.log('API call error:', error.message, error);
    }
  };
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={styles.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={styles.donationAmountDescription}>
          Your are about to donate {donationInformation.price}
        </Text>
        <View>
          <StripeProvider publishableKey={config.STRIPE_PUBLISHABLE_KEY}>
            <CardForm
              style={styles.stripeCardForm}
              onFormComplete={() => setIsReady(true)}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          title={'Donate'}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </View>
  );
};

export default Payment;
