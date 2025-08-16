import { View, Text, Image } from 'react-native';
import React from 'react';
import { Badge } from '../Badge/Badge';
import { Header } from '../Header/Header';
import { styles } from '../SingleDonationItem/style';

export const SingleDonationItem = props => {
  console.log('prps uri value is ', props.uri);
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image source={props.uri} style={styles.image} resizeMode="contain" />
        <View style={styles.donationInformation}>
          <Header title={props.donationTitle} type={3} color={'#0A043c'} />
          <View style={styles.priceContainer}>
            <Header title={'$' + props.price.toFixed(2)} color={'#156CF7'} />
          </View>
        </View>
      </View>
    </View>
  );
};
