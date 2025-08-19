import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { globalStyle } from '../../assets/styles/globalStyle';
import { Input } from '../../components/Input/Input';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Routes } from '../../navigation/routes';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
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
          <Button title={'Login'} />
        </View>
        <Pressable
          style={styles.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}
        >
          <Header type={3} title={"Don't have an account?"} color={'#156CF7'} />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Login;
