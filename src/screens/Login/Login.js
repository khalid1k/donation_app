import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import { globalStyle } from '../../assets/styles/globalStyle';
import { Input } from '../../components/Input/Input';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { Routes } from '../../navigation/routes';
import { loginUser } from '../../api/user';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/reducers/user';
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const user = await loginUser(email, password);
    if (!user.status) {
      setError(user.error);
    } else {
      setError('');
      dispatch(logIn(user.data));
      navigation.navigate(Routes.Home);
    }
  };
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
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 6}
            onPress={handleLogin}
          />
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
