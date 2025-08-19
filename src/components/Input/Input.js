import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';

export const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder && props.placeholder}
        value={value}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};
