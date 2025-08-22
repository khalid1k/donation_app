import { Text, Pressable, ActivityIndicator } from 'react-native';
import React from 'react';
import { styles } from './style';

export const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled ? props.isDisabled : false}
      style={[styles.button, props.isDisabled && styles.disabled]}
      onPress={() => props.onPress()}
    >
      {props.isLoading ? (
        <ActivityIndicator color="#ffffff" size="small" />
      ) : (
        <Text style={styles.title}>{props.title}</Text>
      )}
    </Pressable>
  );
};
