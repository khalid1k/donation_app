import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { globalStyle } from '../../assets/styles/globalStyle';
import { Input } from '../../components/Input/Input';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { BackButton } from '../../components/BackButton/BackButton';
const Registration = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome!'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last Name'}
            secureTextEntry={false}
            placeholder={'Enter Your Full Name...'}
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Email'}
            keyboardType={'email-address'}
            secureTextEntry={false}
            placeholder={'Enter Your Email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Password'}
            secureTextEntry={true}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button title={'Register'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Registration;
