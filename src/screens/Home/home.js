import { View, Text } from 'react-native';
import React from 'react';
import { globalStyle } from '../../assets/styles/globalStyle';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Tab } from '../../components/Tab/Tab';
import { Badge } from '../../components/Badge/Badge';
import { Search } from '../../components/Search/Search';
import { SingleDonationItem } from '../../components/SingleDonationItem/SingleDonation';

const Home = () => {
  const imageUrl = require('../../assets/images/stickers-cactus.jpg');
  return (
    <View style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <Header title={'Azzahri A.'} type={1} />
      <Tab
        title={'Highlight'}
        onPress={() => console.log('button is pressed')}
      />
      <Tab
        title={'Highlight'}
        isInactive={true}
        onPress={() => console.log('button is pressed')}
      />
      <Badge title={'Environment'} />
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
      <SingleDonationItem
        uri={imageUrl}
        badgeTitle={'Enviornment'}
        donationTitle={'Tree Cactus'}
        price={44}
      />
    </View>
  );
};

export default Home;
