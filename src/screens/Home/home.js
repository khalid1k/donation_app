import { View, Text } from 'react-native';
import React from 'react';
import { globalStyle } from '../../assets/styles/globalStyle';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
const Home = () => {
  return (
    <View style={(globalStyle.backgroundWhite, globalStyle.flex)}>
      <Header title={'Azzahri A.'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => console.log('button is pressed from home')}
      />
      <Button title={'Donate'} isDisabled={true} />
    </View>
  );
};

export default Home;
