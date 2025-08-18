import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { globalStyle } from '../../assets/styles/globalStyle';
import { BackButton } from '../../components/BackButton/BackButton';
import { styles } from './style';
import { Badge } from '../../components/Badge/Badge';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';

const SingleDonationItem = ({ navigation, route }) => {
  const donationInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationInformation.image }}
          style={styles.image}
        />
        <View style={styles.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationInformation.name} />
        <Text style={styles.description}>
          {donationInformation.description}
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title={'Donate'} />
      </View>
    </View>
  );
};

export default SingleDonationItem;
