import { Text, Pressable } from 'react-native';
import React from 'react';
import { styles } from './style';

export const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[styles.button, props.isDisabled && styles.disabled]}
      onPress={() => props.onPress()}
    >
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};
