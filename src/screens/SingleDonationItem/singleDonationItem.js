import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalStyle } from '../../assets/styles/globalStyle';
import { BackButton } from '../../components/BackButton/BackButton';
import { styles } from './style';

const SingleDonationItem = ({ navigation }) => {
  const selectedDonationInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  console.log('donation information is ', selectedDonationInformation);
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
};

export default SingleDonationItem;
