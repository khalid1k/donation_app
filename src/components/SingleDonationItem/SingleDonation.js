import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Badge } from '../Badge/Badge';
import { Header } from '../Header/Header';
import { styles } from '../SingleDonationItem/style';

export const SingleDonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}
    >
      <View>
        <View style={styles.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode={'cover'}
          source={{ uri: props.uri }}
          style={styles.image}
        />
      </View>
      <View style={styles.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={3}
        />
        <View style={styles.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};
