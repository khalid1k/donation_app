import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './style';
export const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), props.color && { color: props.color }]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}
      >
        {props.title}
      </Text>
    </View>
  );
};
